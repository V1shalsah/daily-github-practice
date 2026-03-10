let users = [];

// GET users
const getUsers = (req, res) => {
  res.json(users);
};

// POST user
const createUser = (req, res) => {
  const { name, age } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    age
  };

  users.push(newUser);

  res.status(201).json({
    message: "User added successfully",
    user: newUser
  });
};

module.exports = {
  getUsers,
  createUser
};