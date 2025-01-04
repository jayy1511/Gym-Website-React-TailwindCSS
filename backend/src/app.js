const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { requireAuth } = require("@clerk/clerk-sdk-node");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Example protected route
app.get("/protected", requireAuth(), (req, res) => {
  res.json({ message: "You have access to this protected route!" });
});

// Example public route
app.get("/", (req, res) => {
  res.send("Welcome to the Gym App Backend!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
