const messages = require("../model/messages");

const getMessages = (req, res) => {
    res.render("index", { title: "Messages", messages: messages, isForm: false})
  };

module.exports = {
    getMessages
}