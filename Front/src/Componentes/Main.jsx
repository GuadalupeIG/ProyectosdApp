// src/components/main.jsx
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const Main = () => {
  const navegation = useNavigation();
  const handleRegistee = () =>{
    navegation.navigate("Registro");
  };
  const handleEntrada = () =>{
    navegation.navigate("Ingreso");
  };

   return (
    <View style={styles.container}>
           <Image  
        source={require('../../assets/logoINI.png')} 
        style={styles.logo} 
      />
      <View style={styles.inputcontainer}>
       <FontAwesome name={"user-circle-o"} size={20} color={"grey"} style={styles.inputIcon}/>
      <TextInput style={styles.textImput} placeholder="Usuario / Correo" />
      </View>
      <View style={styles.inputcontainer}>
       <EvilIcons name={"lock"} size={30} color={"grey"} style={styles.inputIcon}/>
      <TextInput style={styles.Imput} placeholder="Contraseña"  secureTextEntry={true} />
      </View>
      
      <TouchableOpacity onPress={handleRegistee}>
        <Text style={styles.createAccountText}>Crea una cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleEntrada}>
        <Text style={styles.loginButtonText}>Ingresar</Text>
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
  input: {
    flex: 1,
        marginLeft:5,
  },
  createAccountText: {
    textAlign: 'left',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0720FF',
    textDecorationLine: 'underline',
    marginVertical: 10,
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

export default Main;


