const express = require("express");
const router = express.Router();

let users = [];

// GET users
router.get("/users", (req, res) => {
  res.json(users);
});

// POST user
router.post("/users", (req, res) => {
  const user = req.body;

  users.push(user);

  res.status(201).json({
    message: "User added successfully",
    user: user
  });
});

module.exports = router;