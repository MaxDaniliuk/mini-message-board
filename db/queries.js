const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM Messages");
    return rows;
}

async function insertMessage(params) {
    await pool.query("INSERT INTO Messages (text, username) VALUES ($1, $2)", [...params]);
}

async function deleteMessage(messageId) {
    await pool.query("DELETE FROM Messages WHERE id = $1", [messageId]);
}



module.exports = {
    getAllMessages,
    insertMessage,
    deleteMessage,
}