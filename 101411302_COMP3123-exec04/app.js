const express = require("express");
const app = express();
const port = 3000;

// GET request to /hello
app.get("/hello", (req, res) => {
  res.send("Hello Express JS");
});

// GET request to /user with query parameters
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel";
  res.json({ firstname, lastname });
});

// POST request to /user with path parameters
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// Start the server
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
