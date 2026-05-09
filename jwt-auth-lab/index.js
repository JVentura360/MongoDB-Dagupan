const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

// Secret key for JWT
const SECRET_KEY = "mysecretkey";

// Sample users
const users = [
  { id: 1, username: "admin", password: "admin123", role: "admin" },
  { id: 2, username: "user", password: "user123", role: "user" }
];

// ==========================
// LOGIN ROUTE
// ==========================
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find matching user
  const user = users.find(
    u => u.username === username && u.password === password
  );

  // Invalid credentials
  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  // Generate JWT token
  const token = jwt.sign(
    {
      id: user.id,
      role: user.role
    },
    SECRET_KEY,
    {
      expiresIn: "1h"
    }
  );

  res.json({
    message: "Login successful",
    token
  });
});

// ==========================
// AUTHENTICATION MIDDLEWARE
// ==========================
function authenticateToken(req, res, next) {

  const authHeader = req.headers["authorization"];

  // Get token from "Bearer TOKEN"
  const token = authHeader && authHeader.split(" ")[1];

  // No token
  if (!token) {
    return res.status(401).json({
      message: "Token missing"
    });
  }

  // Verify token
  jwt.verify(token, SECRET_KEY, (err, user) => {

    if (err) {
      return res.status(403).json({
        message: "Invalid token"
      });
    }

    req.user = user;

    next();
  });
}

// ==========================
// PROFILE ROUTE
// ==========================
app.get("/profile", authenticateToken, (req, res) => {

  res.json({
    message: "Welcome User",
    user: req.user
  });

});

// ==========================
// ADMIN ROUTE
// ==========================
app.get("/admin", authenticateToken, (req, res) => {

  // Check admin role
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access denied"
    });
  }

  res.json({
    message: "Welcome Admin"
  });

});

// ==========================
// START SERVER
// ==========================
app.listen(3000, () => {
  console.log("Server running on port 3000");
});