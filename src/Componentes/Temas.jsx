// src/components/ingreso.jsx
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Temas = () => {
  const navegation = useNavigation();
  
  const handleBusqueda  = () =>{
    navegation.navigate("Busqueda");
  };
  const handlecasa = () =>{
    navegation.navigate("Ingreso");
  }
  const handleEntrada = () =>{
    navegation.navigate("Login");
  };

   return (
    <View style={styles.container}>
      <Image  
       source={require('../../assets/logoA.jpeg')} 
        style={styles.logoini} 
      />
      <View style={styles.header}>
      <TouchableOpacity onPress={handleBusqueda} >
      <Text style={styles.logo}>
      <AntDesign name={"arrowleft"} size={30} color={"#14D2DE"} style={styles.inputIcon}/>
        </Text>
        </TouchableOpacity>
      <Text style={styles.info}>Carrera: Ingenieria en computación{'\n'}Semestre: 8°{'\n'}Asignaturas</Text>
    </View>
    <Text style={styles.titulo}>Temas</Text>

    <ScrollView contentContainerStyle={styles.gridContainer}>
      <TouchableOpacity style={[styles.card, styles.card1]}>
        <Text style={styles.cardText}>...</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.card, styles.card2]}>
        <Text style={styles.cardText}>...</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.card, styles.card3]}>
        <Text style={styles.cardText}>...</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.card, styles.card4]}></TouchableOpacity>
      <TouchableOpacity style={[styles.card, styles.card5]}></TouchableOpacity>
      <TouchableOpacity style={[styles.card, styles.card6]}></TouchableOpacity>
    </ScrollView>
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton} onPress={handlecasa} >
      <FontAwesome6 name={"house"} size={20} color={"grey"} style={styles.inputIcon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={handleBusqueda}>
      <Fontisto name={"search"} size={20} color={"grey"} style={styles.inputIcon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
      <MaterialIcons name={"add"} size={25} color={"grey"} style={styles.inputIcon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
      <FontAwesome name={"share"} size={20} color={"grey"} style={styles.inputIcon}/>
      </TouchableOpacity>
    </View>
  </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      padding: 15,
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
    titulo: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 15,
      },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      width: '70%',
      height: 20,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    card1: {
      backgroundColor: '#c1e1c5',
    },
    card2: {
      backgroundColor: '#9ae59a',
    },
    card3: {
      backgroundColor: '#e5e59a',
    },
    card4: {
      backgroundColor: '#9ae5e5',
    },
    card5: {
      backgroundColor: '#9a9ae5',
    },
    card6: {
      backgroundColor: '#e59ae5',
    },
    cardText: {
      color: 'black',
      textAlign: 'center',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    footerButton: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
    },
  });
 
export default Temas;


