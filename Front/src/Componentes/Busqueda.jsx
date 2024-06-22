// src/componentes/login_registro.jsx
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Busqueda = () => {
  const navegation = useNavigation();
  
  const handleRegistee = () =>{
    navegation.navigate("Ingreso");
  };
  const handleArchivos = () =>{
    navegation.navigate("Archivos");
  };

  return (
    <View style={styles.container}>
      <Image  
       source={require('../../assets/logoINI.png')} 
        style={styles.logoini} 
      />
      <View style={styles.header}>
      <TouchableOpacity onPress={handleRegistee} >
      <Text style={styles.logo}>
      <AntDesign name={"arrowleft"} size={30} color={"#14D2DE"} style={styles.inputIcon}/>
       </Text>
        </TouchableOpacity>
        <Text style={styles.Bespecifica}>      Busqueda especifica</Text>
        </View>
      

      <View style={styles.inputcontainer}>
        <Fontisto name={"search"} size={20} color={"grey"} style={styles.inputIcon}/>
        <TextInput style={styles.textImput} placeholder="Nombre de la institución" />
      </View>
      <View style={styles.inputcontainer}>
        <Fontisto name={"search"} size={20} color={"grey"} style={styles.inputIcon}/>
        <TextInput style={styles.textImput} placeholder="Carrera" />
      </View>
      <View style={styles.inputcontainer}>
        <Fontisto name={"search"} size={20} color={"grey"} style={styles.inputIcon}/>
        <TextInput style={styles.textImput} placeholder="Semestre" />
        
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleArchivos} >
        <Text style={styles.loginButtonText}>  
         <Text style={styles.registro}> Buscar </Text>
        </Text>
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

    logoini: {
    width: 300,
    height: 200,
    marginRight: 90,
    alignSelf: 'flex-start',
     },
     header: {
     flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 25,
    },
    logo: {
      color: 'white',
    },
    info: {
      fontSize: 15,
      color: 'white',
      textAlign: 'center',
    },
     inputcontainer:{
      backgroundColor: '#FFF',
      flexDirection :"row",
      width: '80%',
      padding: 10,
      paddingStart: 20,
      marginVertical: 15,
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
    
  registro: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    color: '#000000',
    marginBottom: 10,
    textAlign: 'left',
  },
  Bespecifica:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
    textAlign: 'left',
  },

   loginButton: {
    backgroundColor: '#38EEBF',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    marginVertical: 20,
    alignItems: 'left',


  },
  loginButtonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'left',
  },
 });

export default Busqueda;


