const { client } = require("../database.js");
const { DB_NAME_USER, DB_COLLECTION } = require("../config.js");
const { CognitoUserAttribute } = require("amazon-cognito-identity-js");
const { userPool } = require("../UserPool.js");
const { signUpUser } = require("../components/register.js");

const registerUser = async (req, res) => {
  const { username, email, phoneNumber, password } = req.body;
  const db = client.db(DB_NAME_USER);
  const collection = db.collection(DB_COLLECTION);

  try {
    if (!username && !email && !password && !phoneNumber) {
      return res.status(404).json({ message: `error` });
    }

    const attributeList = [];

    const dataEmail = {
      Name: "email",
      Value: email,
    };

    const dataphoneNumber = {
      Name: "phone_number",
      Value: phoneNumber,
    };

    const attributeEmail = new CognitoUserAttribute(dataEmail);
    const attributePhoneNumber = new CognitoUserAttribute(dataphoneNumber);

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);

    const result = await signUpUser(
      userPool,
      username,
      password,
      attributeList
    );
    console.log("UserSub:", result.userSub); // Asegúrate de que el atributo que accedes existe

    /* const user = {
      _id: cognitoUser,
    };

    await collection.insertOne(user); */
    return res.status(201).json(["Usuario registrado con éxito"]);
  } catch (error) {
    console.error(`Error al registar: ${error}`);
    res.status(400).send(error.message);
  }
};

module.exports = { registerUser };
