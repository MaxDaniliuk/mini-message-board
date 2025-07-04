const express = require("express");

const app = express();
PORT = 3000;

app.get("/", (req, res) => res.send("Mini board is on"));

app.get("/new", (req, res) => res.send("Message to be added"));

app.listen(PORT, () => {
  console.log(`App is running on the http://localhost:${PORT}/`);
});
