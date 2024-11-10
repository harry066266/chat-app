import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import path from "path";
dotenv.config();
const __dirname = path.resolve();
if (!process.env.MONGO_DB_URI) {
  console.error("MONGODB_URI is not defined in environment variables");
  process.exit(1);
}
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
server.listen(port, async () => {
  try {
    await connectToMongoDB();
    console.log(`Server is running on port ${port}`);
    console.log(`Socket.io is ready for connections`); // 添加这行
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1); // 如果数据库连接失败，终止服务器
  }
});
