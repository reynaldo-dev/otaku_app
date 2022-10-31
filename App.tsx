import AsyncStorage from "@react-native-async-storage/async-storage"
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { Navigator } from './src/routing/Navigator';

export default function App() {

  const verifyStorage = async () => {
    if (await AsyncStorage.getItem('favorites') === null) {
      await AsyncStorage.setItem('favorites', JSON.stringify([]))
    }
  }


  useEffect(() => {
    verifyStorage()
  }, [])

  return (
    <Provider store={store}>
      <StatusBar backgroundColor='#8b5cf6' />
      <Navigator />
    </Provider>

  );
}


