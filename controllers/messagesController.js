const messages = require("../model/messages");
const uuid = require("uuid");

const getMessages = (req, res) => {
  res.render("index", { title: "Messages", messages: messages });
};

const createMessageGet = (req, res) => {
  res.render("form", { title: "Messages" });
};

const createMessagePost = (req, res) => {
  const { user, text } = req.body;
  messages.push({
    id: uuid.v4(),
    text: text,
    user: user,
    added: new Date(),
  });
  res.redirect("/");
};

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost,
};
