const { CognitoUserPool } = require('amazon-cognito-identity-js');

const poolData = {
    UserPoolId: 'us-east-1_CXdyyRQD6',
    ClientId: '6ofhlvod9q73j3vuf70fkjgnkt'
};

const userPool = new CognitoUserPool(poolData);


module.exports = {userPool}