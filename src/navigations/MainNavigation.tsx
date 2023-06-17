import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import TabNavigation from './TabNavigation'
import Login from '../screens/Login'
import HeaderBackground from '../components/header/HeaderBackground'
import Register from '../screens/Register'


const Stack = createNativeStackNavigator()
export default function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Group screenOptions={{headerShadowVisible:false}}>
        <Stack.Screen name='Home' component={TabNavigation} options={{
          headerShown: false
        }} />
      </Stack.Group>

      <Stack.Group screenOptions={{ headerTitle:'',
        headerTransparent:true,
        presentation: "containedModal" }}>
          <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
