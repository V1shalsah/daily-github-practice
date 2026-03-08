const express = require("express");
const router = express.Router();

// GET API
router.get("/users", (req, res) => {
  res.json({
    message: "User API working",
    users: ["Vishal", "Rahul", "Aman"]
  });
});

module.exports = router;