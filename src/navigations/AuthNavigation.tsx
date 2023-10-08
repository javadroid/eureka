import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import TabNavigation from './TabNavigation'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Profile from '../screens/Profile'
import { useSelector } from 'react-redux'

const Stack = createNativeStackNavigator()
export default function AuthNavigation() {
  
    return (
        <Stack.Navigator initialRouteName={'Auth'}>
          <Stack.Group screenOptions={{headerShown:false,headerShadowVisible: false,headerTransparent:true}}>
            <Stack.Screen 
            name='Login' 
            component={Login} 
            options={{
              headerShown: false
            }} />
          </Stack.Group>
    
            <Stack.Screen options={{
              headerShown:false,
                headerTransparent:true
              }} name='Register' component={Register} 
            />
    
        </Stack.Navigator>
      )
  
}
