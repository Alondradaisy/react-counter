const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/counter", (req, res) => {
  const counter = req.query.name || "React Counter";
  res.send(JSON.stringify({ New: `${counter}!` }));
});

app.listen(3001, () => {
  console.log("Express server is live!");
});
