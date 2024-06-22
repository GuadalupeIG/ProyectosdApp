// src/componentes/login_registro.jsx
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Login_registro = () => {
  const navegation = useNavigation();
  
  const handleRegistee = () =>{
    navegation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image  
       source={require('../../assets/logoINI.png')} 
        style={styles.logo} 
      />
      <Text style={styles.registro}> Registro </Text>
      <View style={styles.inputcontainer}>
        <FontAwesome name={"institution"} size={20} color={"grey"} style={styles.inputIcon}/>
        <TextInput style={styles.textImput} placeholder="Instituto" />
      </View>
      <View style={styles.inputcontainer}>
        <FontAwesome name={"user-circle-o"} size={20} color={"grey"} style={styles.inputIcon}/>
        <TextInput style={styles.textImput} placeholder="Nombre de usuario" />
      </View>
      <View style={styles.inputcontainer}>
        <Fontisto name={"email"} size={20} color={"grey"} style={styles.inputIcon}/>
        <TextInput style={styles.textImput} placeholder="Correo" />
      </View>
      <View style={styles.inputcontainer}>
        <EvilIcons name={"lock"} size={30} color={"grey"} style={styles.inputIcon}/>
        <TextInput style={styles.imput} placeholder="Contraseña"  secureTextEntry={true} />
        </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleRegistee} >
        <Text style={styles.loginButtonText}>Enviar</Text>
      </TouchableOpacity>
       </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000000',
    justifyContent: 'center',
    alignItems: 'center',
    },
    logo: {
    width: 300,
    height: 200,
    marginRight: 100,
    alignSelf: 'flex-start',
     },
     inputcontainer:{
      backgroundColor: '#FFF',
      flexDirection :"row",
      width: '80%',
      padding: 10,
      paddingStart: 20,
      marginVertical: 10,
      borderRadius: 30,
      alignItems: "center",
      },
      inputIcon:{
        marginLeft:5,
      },
      textImput:{
        flex: 1,
        marginLeft:10,
      },
  imput: {
    flex: 1,
        marginLeft:5,
  },
    
  registro: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 30,
    textAlign: 'right',
  },
   loginButton: {
    backgroundColor: '#38EEBF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Login_registro;


