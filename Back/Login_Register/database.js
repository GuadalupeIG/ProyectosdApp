const { MongoClient } = require("mongodb");
const { HOST_MONGO, DB_NAME_USER } = require("./config.js");

const client = new MongoClient(HOST_MONGO);

const connecDb = async () => {
  try {
    await client.connect();
    client.db(DB_NAME_USER);
    console.log("Conexion exitosa a MongoDB");
  } catch (error) {
    confirm.error(`Error en la conexion a MongoDB ${error}`);
  }
};

module.exports = { connecDb, client };
