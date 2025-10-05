import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/authRoutes.js";
import UserRouter from "./src/routers/userRoutes.js";
import morgan from "morgan";
import cloudinary from "./src/config/cloudinary.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth", AuthRouter);
app.use("/user", UserRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Job Portal API" });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
  try {
    const res = await cloudinary.api.ping();
    console.log("Cloudinary API is working:", res);
  } catch (error) {
    console.error("Error connecting to Cloudinary API:", error);
  }
});
