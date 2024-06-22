// src/components/ingreso.jsx
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Ingreso = () => {
  const navegation = useNavigation();
  
  const handleBusqueda  = () =>{
    navegation.navigate("Busqueda");
  };
  const handleEntrada = () =>{
    navegation.navigate("Login");
  };

   return (
    <View style={styles.container}>
           <Image 
        source={require('../../assets/logoA.jpeg')} 
        style={styles.logo} 
      />
      <View style={styles.inputcontainer}>
      <TouchableOpacity onPress={handleBusqueda}>
        <Text style={styles.createAccountText}>
        <Fontisto name={"search"} size={20} color={"grey"} style={styles.inputIcon}/>
        </Text>
      </TouchableOpacity>
        <TextInput style={styles.textImput} placeholder="" />
      </View>
      <TextInput placeholder=" " style={styles.input} />
            <Text style={styles.nota}> NOTA: si necesitar buscar algo en especifico has click en la lupa </Text>
     <ScrollView contentContainerStyle={styles.gridContainer}>
      <TouchableOpacity style={[styles.card, styles.card1]}>
        <Text style={styles.cardText}>Recientes</Text>
        <Text style={styles.cardText}>¡Aqui se observara las vistas recientes de doc,img,qrs,etc! </Text>
      </TouchableOpacity>
      </ScrollView>      
      <TouchableOpacity style={styles.loginButton} onPress={handleEntrada}>
        <Text style={styles.loginButtonText}>Cerrar sección</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000000',
    alignItems: 'center',
    padding: 10,
    },
    logo: {
    width: 300,
    height: 200,
    marginRight: 100,
    alignSelf: 'flex-start',
     },
     createAccountText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#0720FF',
      marginVertical: 5,
      textAlign: 'left',
    },
     inputcontainer:{
      backgroundColor: '#FFF',
      flexDirection :"row",
      width: '85%',
      padding: 10,
      paddingStart: 20,
      borderRadius: 30,
      alignItems: "center",
      },
      inputIcon:{
        marginLeft: 5,
      },
      textImput:{
        flex: 1,
        marginLeft:5,
      },
      nota: {
        fontSize: 12,
        width: 300,
        height: 50,
        fontWeight: 'bold',
        color: '#FFFfff',
        marginBottom: 10,
        textAlign: 'center',
      },
      gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      card: {
        width: 300,
        height: 200,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      card1: {
        backgroundColor: '#D9D9D9',
        marginBottom: 5,

      },
      cardText: {
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        marginBottom: 10,

      },
   loginButton: {
    backgroundColor: '#38EEBF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 100,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Ingreso;


