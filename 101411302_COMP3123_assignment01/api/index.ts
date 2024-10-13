const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));

module.exports = app;