import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Serever Connected" });
});


app.post("/register", (req, res) => {
  res.status(201).json({ message: "User Registration Successfull" });
});

app.post("/login", (req, res) => {
  res.status(200).json({ message: "User Login Successfull" });
});

app.get("/logout", (req, res) => {
  res.status(200).json({ message: "User Logout Successfull" });
});


app.put("/update", (req, res) => {
  res.status(200).json({ message: "User Update Successfull" });
});

app.patch("/changepass", (req, res) => {
  res.status(200).json({ message: "User password change Successfull" });
});

app.delete("/delete", (req, res) => {
  res.status(204).json({ message: "User delete Successfull" });
});

app.listen(5000, () => {
  console.log("Server Started at port 5000");
});
