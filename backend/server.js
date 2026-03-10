const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend server running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});