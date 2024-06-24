const { config } = require("dotenv");
config();

const PORT = process.env.PORT || 3000;
const HOST_MONGO = process.env.HOST_MONGO;
const DB_NAME_USER = process.env.DB_NAME_USER;
const DB_COLLECTION = process.env.DB_COLLECTION;
module.exports = { PORT, DB_NAME_USER, HOST_MONGO, DB_COLLECTION };
