import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import AuthRouter from "./src/routes/authRouter.js";
import UserRouter from "./src/routes/userRouter.js";
import connectDB from "./src/config/db.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", AuthRouter);
app.use("/user", UserRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Serever Connected" });
});

// let Port;
// if (!process.env.PORT) {
//   Port = 5000;
// } else {
//   Port = process.env.PORT;
// }

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Started at port", port);
  connectDB();
});
