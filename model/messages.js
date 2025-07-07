const uuid = require("uuid");

const messages = [
  {
    id: uuid.v4(),
    text: "Hi there!",
    user: "Amado",
    added: new Date(),
  },
  {
    id: uuid.v4(),
    text: "Hello World!",
    user: "Kawaki",
    added: new Date(),
  },
  {
    id: uuid.v4(),
    text: "Yo!",
    user: "Boruto",
    added: new Date(),
  },
  {
    id: uuid.v4(),
    text: "Come back home...",
    user: "Naruto",
    added: new Date(),
  },
  {
    id: uuid.v4(),
    text: "Brat...",
    user: "Kurama",
    added: new Date(),
  },
  {
    id: uuid.v4(),
    text: "Yummy",
    user: "Momoshiki",
    added: new Date(),
  },
];

function removeMessage(messageId) {
  const targetIndex = messages.findIndex((message) => (message.id = messageId));
  messages.splice(targetIndex, 1);
  console.log(messages);
  return;
}

module.exports = {
  messages,
  removeMessage,
};
