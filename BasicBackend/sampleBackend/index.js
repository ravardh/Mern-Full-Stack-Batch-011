import express from "express";
import AuthRouter from "./src/routes/authRouter.js";
import UserRouter from "./src/routes/userRouter.js";

const app = express();

app.use("/auth", AuthRouter);
app.use("/user", UserRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Serever Connected" });
});

app.listen(5000, () => {
  console.log("Server Started at port 5000");
});
