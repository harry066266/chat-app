import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";

function App() {
  const { authUser } = useAuthContext(); // 在组件内部调用 hook

  const router = createBrowserRouter([
    {
      path: "/",
      element: authUser ? <Home /> : <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: authUser ? <Navigate to="/" /> : <Login />, // 如果已登录，重定向到主页
    },
    {
      path: "/signup",
      element: authUser ? <Navigate to="/" /> : <Signup />, // 如果已登录，重定向到主页
    },
  ]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
