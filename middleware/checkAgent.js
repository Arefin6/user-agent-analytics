const { saveUserAgent, saveBlockedUserAgent } = require("../utils/logger");

const checkUserAgent = (req, res, next) => {
  const userAgent = req.headers["user-agent"];
  const blockedPatterns = [
    /curl/i,
    /wget/i,
    /python-requests/i,
    /Go-http-client/i,
    /Java/i,
    /sqlmap/i,
    /nmap/i,
    /Nikto/i,
    /HeadlessChrome/i,
    /PhantomJS/i,
  ];

  const isBlocked = blockedPatterns.some((pattern) => pattern.test(userAgent));
  if (isBlocked) {
    // Save the blocked user agent
    saveBlockedUserAgent(userAgent);
    return res
      .status(403)
      .json({ error: "Access denied!Suspicious User Agent try another agent" });
  } else if (!userAgent) {
    return res
      .status(403)
      .json({ error: "Access denied! User Agent is required" });
  }
  //if not blocked
  saveUserAgent(userAgent);
  next();
};

module.exports = checkUserAgent;
