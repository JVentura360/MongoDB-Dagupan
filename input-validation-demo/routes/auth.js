const express = require("express");
const router = express.Router();
const validateUser = require("../middleware/validateUser");

// POST /api/register
router.post("/register", validateUser, (req, res) => {
  const { name, email } = req.body;

  res.status(200).json({
    success: true,
    message: "User registered successfully",
    user: {
      name,
      email,
    },
  });
});

module.exports = router;