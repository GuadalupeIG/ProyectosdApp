const React = require('react');
const useState = React;
const userPool = require('../UserPool');
const UserPool = require('../UserPool');

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhonenumber] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        //signUp(NombreDeUsuario, Contraseña, DatosExtra, null)
        UserPool.signUp(
            username, 
            password,
            [
                {Name: 'email', Value: email},
                {Name: phone_number, Value: phoneNumber}
            ],
            null,
            (err, result) =>{
                if(err) {
                    console.error(err);
                }else{
                    console.log('User signed up succesfully: ', result);
                }
            });
    }
}