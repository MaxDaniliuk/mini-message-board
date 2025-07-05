const express = require("express");
const path = require("path");
const messagesController = require("./controllers/messagesController");

const app = express();
PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", messagesController.getMessages);

app.get("/new", (req, res) => res.send("Message to be added"));

app.listen(PORT, () => {
  console.log(`App is running on the http://localhost:${PORT}/`);
});
