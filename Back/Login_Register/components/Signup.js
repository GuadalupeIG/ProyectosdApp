// const React = require('react');
// const useState = React;
// const userPool = require('../UserPool');
// const UserPool = require('../UserPool');

// const Signup = () => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [phoneNumber, setPhonenumber] = useState("");
//     const [password, setPassword] = useState("");

//     const onSubmit = (event) => {
//         event.preventDefault();

//         //signUp(NombreDeUsuario, Contraseña, DatosExtra, null)
//         UserPool.signUp(
//             username, 
//             password,
//             [
//                 {Name: 'email', Value: email},
//                 {Name: phone_number, Value: phoneNumber}
//             ],
//             null,
//             (err, result) =>{
//                 if(err) {
//                     console.error(err);
//                 }else{
//                     console.log('User signed up succesfully: ', result);
//                 }
//             });
//     }
// }


const {CognitoUserAttribute} = require('amazon-cognito-identity-js')
const {userPool} = require('../UserPool.js')

const attributeList = [];

const dataEmail = {
    Name: 'email',
    Value: 'jpaz7913@gmail.com'
};

const dataphoneNumber = {
    Name: 'phone_number',
    Value: '+525584696772'
}

const attributeEmail = new CognitoUserAttribute(dataEmail)
const attributePhoneNumber = new CognitoUserAttribute(dataphoneNumber)
attributeList.push(attributeEmail)
attributeList.push(attributePhoneNumber)


userPool.signUp('username1', 'password', attributeList, null, (err, result) => {
    if(err) {
        console.log(err);
        return;
    }

    const cognitoUser = result.user
    console.log(`User name is ${cognitoUser.getUsername()}`);
})


