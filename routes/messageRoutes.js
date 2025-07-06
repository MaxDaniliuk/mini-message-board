const { Router } = require("express");
const messagesController = require("../controllers/messagesController");

const router = Router();

router.get("/", messagesController.getNewMessage);

module.exports = router;
