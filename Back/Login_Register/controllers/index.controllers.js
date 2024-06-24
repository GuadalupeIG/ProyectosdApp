const { client } = require("../database.js");
const { DB_NAME_USER, DB_COLLECTION } = require("../config.js");

const registerUser = async (req, res) => {
  const { username, email, pasword } = req.body;
  const db = client.db(DB_NAME_USER);
  const collection = db.collection(DB_COLLECTION);

  try {
    if (!username && !email && !pasword) {
      res.status(404).json({ message: `error` });
    }

    const existingUser = await collection.findOne({ email: email });
    const existingUsername = await collection.findOne({ username: username });
    if (existingUser || existingUsername) {
      return res.status(400).json(["El usuario ya existe"]);
    }

    const userid = uuid.v4();

    const user = {
      _id: userid,
      username,
      email,
      pasword,
    };

    await collection.insertOne(user);
    res.status(201).json(["Usuario registrado con éxito"]);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { registerUser };
