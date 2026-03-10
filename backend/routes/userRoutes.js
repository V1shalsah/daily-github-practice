const express = require("express");
const router = express.Router();

let users = [];

// GET users
router.get("/users", (req, res) => {
  res.json(users);
});

// POST user
router.post("/users", (req, res) => {
  const { name, age } = req.body;

  const newUser = {
    id: users.length + 1,
    name: name,
    age: age
  };

  users.push(newUser);

  res.status(201).json({
    message: "User added successfully",
    user: newUser
  });
});

module.exports = router;