import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connextToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.listen(port, () => {
  connextToMongoDB();
  console.log(`Server is running on port ${port}`);
});
