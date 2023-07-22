import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font'
import 'react-native-gesture-handler'
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { currentAppVersion, getAppVersion } from '../constants/service';

import MainNavigation from './MainNavigation';
import CheckUserData from '../loaders/CheckUserData';
import Login from '../screens/Login';
import DrawerNavigation from './DrawerNavigation';
import CheckUpdate from '../loaders/CheckUpdate';


export default function AppNavigation() {

  let isAppVersion = null as null | Boolean
  if (getAppVersion() === currentAppVersion) {
    isAppVersion = (true)
  } else {
    isAppVersion = (false)
  }
  return (
    <NavigationContainer>
      <CheckUpdate/>      
    </NavigationContainer>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});