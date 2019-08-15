const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// @routes  GET api/items
// @desc    Gets All Items
// @access  Public
router.get("/", (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// @routes  POST api/items
// @desc    Create A Item
// @access  Public
router.post("/", (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem
        .save()
        .then(item => res.json(item))
        .catch(err => Error(err));
});

// @routes  DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
