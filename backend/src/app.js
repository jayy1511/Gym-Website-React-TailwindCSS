const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { requireAuth } = require("@clerk/clerk-sdk-node");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI; // Add your connection string here
    if (!mongoURI) {
      throw new Error("Missing MONGO_URI in .env file");
    }
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

connectDB();

// Example Routes
app.get("/protected", requireAuth(), (req, res) => {
  res.json({ message: "You have access to this protected route!" });
});

app.get("/", (req, res) => {
  res.send("Welcome to the Gym App Backend!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
