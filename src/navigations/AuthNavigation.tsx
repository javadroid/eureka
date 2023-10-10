import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import TabNavigation from './TabNavigation'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Profile from '../screens/Profile'
import { useSelector } from 'react-redux'
import VerificationCode from '../screens/VerificationCode'
import colors from '../constants/colors'
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const Stack = createNativeStackNavigator()
export default function AuthNavigation() {
const navigate=useNavigation()
  return (
    <Stack.Navigator initialRouteName={'Auth'}>
      <Stack.Group screenOptions={{ headerShown: false, headerShadowVisible: false, headerTransparent: true }}>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false
          }} />

        <Stack.Screen options={{
          headerShown: false,
          headerTransparent: true
        }} name='Register' component={Register}
        />
        <Stack.Screen options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle:{color:colors.grey45},
          headerLeft:()=><Feather onPress={()=>navigate.goBack()} style={{marginRight:20}} size={22} color={colors.grey45} name='arrow-left'/>
        }} name='Verification' component={VerificationCode}
        />
      </Stack.Group>



    </Stack.Navigator>
  )

}
