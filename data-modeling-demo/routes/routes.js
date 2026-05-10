const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Task = require("../models/Task");


// Create User and Task
router.post("/create", async (req, res) => {
    try {

        const user = new User({
            name: "John Doe",
            email: "john@example.com"
        });

        const savedUser = await user.save();

        const task = new Task({
            title: "Finish Activity",
            description: "Complete MongoDB Lab",
            completed: false,
            userId: savedUser._id
        });

        const savedTask = await task.save();

        res.json({
            user: savedUser,
            task: savedTask
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Fetch Users
router.get("/users", async (req, res) => {
    try {

        const users = await User.find();

        res.json(users);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Fetch Tasks with Populate
router.get("/tasks", async (req, res) => {
    try {

        const tasks = await Task.find().populate("userId");

        res.json(tasks);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;