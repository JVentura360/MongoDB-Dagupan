const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

const authRoutes = require("./routes/auth");

// Routes
app.use("/api", authRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});