const { CognitoUser, AuthenticationDetails } = require('amazon-cognito-identity-js');
const { userPool } = require('../UserPool.js');
const readlineSync = require('readline-sync');

const user = new CognitoUser({
    Username: 'username2',
    Pool: userPool
});

const authDetails = new AuthenticationDetails({
    Username: 'username2',
    Password: 'Password123!',
});

user.authenticateUser(authDetails, {
    onSuccess: (data) => {
        console.log("onSuccess: ", data);
    },
    onFailure: (err) => {
        console.error("onFailure: ", err);
    },
    newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
    },
    mfaRequired: (codeDeliveryDetails) => {
        console.log('El código se envió a: ', codeDeliveryDetails);

        const verificationCode = readlineSync.question('Please input the verification code: ');

        user.sendMFACode(verificationCode, {
            onSuccess: (result) => {
                console.log('MFA authentication successful');
            },
            onFailure: (err) => {
                console.error(err);
            }
        });
    }
});
