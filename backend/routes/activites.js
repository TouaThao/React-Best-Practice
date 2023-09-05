const express = require("express");
const router = express.Router();

const Activity = require("../models/Activity");

// Create activity route
router.post("/create", async (req, res) => {
  try {
    const newActivity = new Activity(req.body);
    const activity = await newActivity.save();
    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all activities route
router.get("/", async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// More CRUD routes (Update, Delete) can be added here

module.exports = router;
