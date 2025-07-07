const { Router } = require("express");
const messagesController = require("../controllers/messagesController");

const router = Router();

router.get("/", messagesController.createMessageGet);
router.post("/", messagesController.createMessagePost);

module.exports = router;
