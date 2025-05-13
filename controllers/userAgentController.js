const fs = require("fs").promises;
const path = require("path");
const userAgent = async (req, res) => {
  const data = await fs.readFile(
    path.join(__dirname, "../userAgents.json"),
    "utf-8"
  );
  const userAgents = JSON.parse(data);

  const summary = {
    Postman: 0,
    "Thunder Client": 0,
    "Chrome Browser": 0,
    "Edge Browser": 0,
  };

  userAgents.forEach((ua) => {
    if (/postmanruntime/i.test(ua)) {
      summary.Postman++;
    } else if (/thunder client/i.test(ua)) {
      summary["Thunder Client"]++;
    } else if (/chrome/i.test(ua) && !/Edg/i.test(ua)) {
      summary["Chrome Browser"]++;
    } else if (/Edg/i.test(ua)) {
      summary["Edge Browser"]++;
    }
  });
  res.status(200).json(summary);
};

const blockedUserAgent = async (req, res) => {
  const data = await fs.readFile(
    path.join(__dirname, "../blockedAgent.json"),
    "utf-8"
  );
  const blockedAgents = JSON.parse(data);

  let blockCount = 0;

  blockedAgents.forEach((ua) => {
    blockCount++;
  });
  res.status(200).json({ blockAgents: blockCount });
};

module.exports = { userAgent, blockedUserAgent };
