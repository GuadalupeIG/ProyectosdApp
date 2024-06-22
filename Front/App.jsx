import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './src/Componentes/Main';
import Login_registro from './src/Componentes/Login_registro';
import Ingreso from './src/Componentes/Ingreso';
import Busqueda from './src/Componentes/Busqueda';
import Archivos from './src/Componentes/Archivos';
import Temas from './src/Componentes/Temas';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
     screenOptions={{
        headerShown:  false, 
     }}
     >
      <Stack.Screen name="Login" component={Main} />
      <Stack.Screen name="Registro" component={Login_registro} />
      <Stack.Screen name="Ingreso" component={Ingreso} />
      <Stack.Screen name="Busqueda" component={Busqueda} />
      <Stack.Screen name="Archivos" component={Archivos} />
      <Stack.Screen name="Temas" component={Temas} />



    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})