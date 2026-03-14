const validateUser = (req, res, next) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      message: "Name and age are required"
    });
  }

  if (typeof age !== "number") {
    return res.status(400).json({
      message: "Age must be a number"
    });
  }

  next();
};

module.exports = validateUser;