const router = require("express").Router();
const Item = require("../models/Item");

// GET ALL ITEMS
router.get("/", async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ADD ITEM
router.post("/add", async (req, res) => {
    try {
        const newItem = new Item({
            name: req.body.name,
            description: req.body.description
        });

        await newItem.save();
        res.json("Item added!");
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET BY ID
router.get("/:id", async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        res.json(item);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;