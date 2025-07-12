require("dotenv").config();
const express = require("express");
const path = require("path");
const messagesController = require("./controllers/messagesController");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", messagesController.getMessages);
app.delete("/:id", messagesController.deleteMessage);
app.use("/new", messageRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

app.listen(PORT, () => {
  console.log(`App is running on the http://localhost:${PORT}/`);
});
