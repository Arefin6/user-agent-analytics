const path = require("path");

const analytics = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  } catch (error) {
    console.error("Error in analytics data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = analytics;
