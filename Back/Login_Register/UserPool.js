const { CognitoUserPool } = require('amazon-cognito-identity-js');

const poolData = {
    UserPoolId: 'us-east-1_CXdyyRQD6',
    ClientId: '2f862qg80piehortaidafe2qkj'
};

const userPool = new CognitoUserPool(poolData);


module.exports = {userPool}