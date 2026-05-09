const express = require("express");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

// Middleware
app.use(express.json());

// Success Route
app.get("/success", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Route working successfully"
  });
});

// Error Route
app.get("/error", (req, res, next) => {
  const error = new Error("Intentional server error");
  next(error);
});

// Custom Error Route
app.get("/custom-error", (req, res, next) => {
  const error = new Error("Custom bad request error");
  error.statusCode = 400;

  next(error);
});

// 404 Handler
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.statusCode = 404;

  next(error);
});

// Error Middleware
app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});