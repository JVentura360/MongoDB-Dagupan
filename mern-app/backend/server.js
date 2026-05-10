const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.log(err));

const itemRoutes = require("./routes/items");
app.use("/items", itemRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});