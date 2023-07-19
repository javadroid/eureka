import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import TabNavigation from './TabNavigation'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Profile from '../screens/Profile'
import { useSelector } from 'react-redux'


const Stack = createNativeStackNavigator()
export default function MainNavigation() {

 
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Group screenOptions={{ headerShadowVisible: false }}>
        <Stack.Screen name='Home' component={TabNavigation} options={{
          headerShown: false
        }} />
      </Stack.Group>

      
        <Stack.Screen options={{
            headerTitle: '',
            headerTitleAlign: 'center',
            headerTransparent:true
          }} name='Profile' component={Profile} />


 
</Stack.Navigator>
  )
}


