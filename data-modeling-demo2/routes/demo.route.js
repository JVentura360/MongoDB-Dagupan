const express = require("express");

const router = express.Router();

const User = require("../models/user.model");
const Task = require("../models/task.model");


// CREATE USER AND TASK
router.post("/create", async (req, res) => {

    try {

        const user = new User({
            name: "John Doe",
            email: "john@example.com"
        });

        const savedUser = await user.save();

        const task = new Task({
            title: "Complete Activity",
            description: "Finish MongoDB Data Modeling Lab",
            completed: false,
            userId: savedUser._id
        });

        const savedTask = await task.save();

        res.status(201).json({
            message: "User and Task Created",
            user: savedUser,
            task: savedTask
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
});


// FETCH USERS
router.get("/users", async (req, res) => {

    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
});


// FETCH TASKS WITH POPULATE
router.get("/tasks", async (req, res) => {

    try {

        const tasks = await Task.find().populate("userId");

        res.json(tasks);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
});


// VALIDATION TEST ROUTE
router.post("/invalid-user", async (req, res) => {

    try {

        const user = new User({
            name: "Invalid User"
        });

        await user.save();

        res.json(user);

    } catch (error) {

        res.status(400).json({
            validationError: error.message
        });
    }
});

module.exports = router;