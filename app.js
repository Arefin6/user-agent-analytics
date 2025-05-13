const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const rateLimit = require("express-rate-limit");
const checkUserAgent = require("./middleware/checkAgent");
const userRoutes = require("./routes/userRoutes");
const port = 5000;

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// join the public directory
app.use(express.static(path.join(__dirname, "public")));

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 1000, // 15 minutes
  max: 3, // Limit each IP to 100 requests per windowMs
  message: {
    error: "Too many requests, please try again later.",
  },
});
// Basic routes
app.get("/", limiter, (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/user", limiter, checkUserAgent, userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
