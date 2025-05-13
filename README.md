# User Agent Analytics Dashboard

A web application that tracks and visualizes user agent requests, distinguishing between allowed and blocked agents.

![Dashboard Screenshot](https://res.cloudinary.com/drbxd3o2a/image/upload/v1745439056/userAnalytics_p8nmo8.png) 


## Features

- Real-time tracking of user agents
- Visual analytics with Chart.js
- Separate metrics for allowed and blocked agents
- Rate limiting and security middleware

## API Routes

The following endpoints are available in this service:

| Route | Method | Description |
|-------|--------|-------------|
| [`/api/user/analytics`](https://user-agent-analytics.onrender.com/api/user/analytics) | GET | Main analytics endpoint |
| [`/api/user/analytics/user-agents`](https://user-agent-analytics.onrender.com/api/user/analytics/user-agents) | GET | Detailed allowed user agents data |
| [`/api/user/analytics/blocked-agent`](https://user-agent-analytics.onrender.com/api/user/analytics/blocked-agent) | GET | Blocked agents statistics |

## Live Demo

The application is deployed on Render:  
🔗 [User Agent Analytics Dashboard](https://user-agent-analytics.onrender.com/api/user/analytics)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-agent-analytics.git
   cd user-agent-analytics
   
2. Install all dependencies and run:
  ```bash
   npm install
   npm start

   
