const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/activitiesdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check MongoDB connection
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const activityRoutes = require("./routes/activities");

app.use("/activities", activityRoutes);
