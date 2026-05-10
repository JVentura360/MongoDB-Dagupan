const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(express.json());


// DATABASE CONNECTION
connectDB();


// ROUTES
app.use("/", require("./routes/demo.route"));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});