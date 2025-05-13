const express = require("express");
const analytics = require("../controllers/userAnaliticesController");
const {
  userAgent,
  blockedUserAgent,
} = require("../controllers/userAgentController");
const router = express.Router();

router.get("/analytics/user-agents", userAgent);
router.get("/analytics/blocked-agent", blockedUserAgent);

//serve html file
router.get("/analytics", analytics);

module.exports = router;
