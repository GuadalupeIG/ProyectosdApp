import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import axios from 'axios';

const checkSession = async () => {
  const token = await AsyncStorage.getItem('userToken');
  if (token) {
    try {
      const response = await axios.get('http://your-express-server/check-session', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.data.username) {
        // Sesión válida
      } else {
        // Sesión inválida
        await AsyncStorage.removeItem('userToken');
      }
    } catch (error) {
      // Error al verificar la sesión
      await AsyncStorage.removeItem('userToken');
    }
  }
};

useEffect(() => {
  checkSession();
}, []);