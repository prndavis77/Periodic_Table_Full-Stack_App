const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, "build")));

// Example API route (optional)
app.get("/api/example", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Catch-all route: serve index.html for all other routes
// This ensures that the frontend routing works correctly
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server on port 5000 or environment port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
