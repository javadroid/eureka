import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
import { store } from './src/utils/store/store';
import InternetStatus from './src/loaders/InternetStatus';
import FontsLoader from './src/loaders/FontsLoader';
import * as SplashScreen from 'expo-splash-screen'


SplashScreen.preventAutoHideAsync()
export default function App() {
  

  return (
    <Provider store={store}>
      <MenuProvider>
        <FontsLoader/>
        <StatusBar style="auto" />
      </MenuProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


