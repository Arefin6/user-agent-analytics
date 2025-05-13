const fs = require("fs");
const path = require("path");

const userAgentFile = path.join(__dirname, "../userAgents.json");
const blockedAgentFile = path.join(__dirname, "../blockedAgent.json");

// save valid user agents
const saveUserAgent = (userAgent) => {
  let data = [];
  // Check if the file exists
  if (fs.existsSync(userAgentFile)) {
    // Read the existing data
    const fileData = fs.readFileSync(userAgentFile);
    data = JSON.parse(fileData);
  }
  data.push(userAgent);
  fs.writeFileSync(userAgentFile, JSON.stringify(data, null, 2));
};

// save blocked user agents
const saveBlockedUserAgent = (userAgent) => {
  let data = [];
  // Check if the file exists
  if (fs.existsSync(blockedAgentFile)) {
    // Read the existing data
    const fileData = fs.readFileSync(blockedAgentFile);
    data = JSON.parse(fileData);
  }
  data.push(userAgent);
  fs.writeFileSync(blockedAgentFile, JSON.stringify(data, null, 2));
};

module.exports = { saveUserAgent, saveBlockedUserAgent };
