const messages = require("../model/messages");

const getMessages = (req, res) => {
  res.render("index", { title: "Messages", messages: messages, isForm: false });
};

const getNewMessage = (req, res) => {
  res.render("index", { title: "Messages", messages: messages, isForm: true });
};

module.exports = {
  getMessages,
  getNewMessage,
};
