const db = require("../db/queries");

const getMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Messages", messages: messages });
};

const deleteMessage = async (req, res) => {
  const { id } = req.params;
  await db.deleteMessage(id);
  return res.status(200).end();
};

const createMessageGet = (req, res) => {
  res.render("form", { title: "Messages" });
};

const createMessagePost = async (req, res) => {
  const { username, text } = req.body;
  await db.insertMessage([text, username]);
  res.redirect("/");
};

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost,
  deleteMessage,
};
