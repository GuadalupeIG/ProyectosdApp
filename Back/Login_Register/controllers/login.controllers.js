const {
  CognitoUser,
  AuthenticationDetails,
} = require("amazon-cognito-identity-js");
const { userPool } = require("../UserPool.js");

const loginUser = async (req, res) => {
  const { username, pasword } = req.body;

  try {
    if (!username && !pasword) {
      return res.status(404).json({ message: `error` });
    }

    const user = new CognitoUser({
      Username: username,
      Pool: userPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: pasword,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
        res.status(200).json(data.idToken.payload.sub);
      },
      onFailure: (err) => {
        console.error("onFailure: ", err);
        res.status(400).json(err.message);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loginUser };
