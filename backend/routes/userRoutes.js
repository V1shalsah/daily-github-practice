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

// PUT API (Update User)
router.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age } = req.body;

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = name || user.name;
  user.age = age || user.age;

  res.json({
    message: "User updated successfully",
    user: user
  });
});

// DELETE API (Delete User)
router.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const userIndex = users.findIndex(u => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(userIndex, 1);

  res.json({
    message: "User deleted successfully",
    user: deletedUser
  });
});

module.exports = router;