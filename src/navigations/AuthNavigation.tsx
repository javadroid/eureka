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
import FeedList from '../screens/Feeds/FeedList'
import OpenFeed from '../screens/Feeds/OpenFeed'

const Stack = createNativeStackNavigator()
export default function AuthNavigation() {
  const navigate = useNavigation()
  return (
    <Stack.Navigator initialRouteName={'Feeds'}>
      <Stack.Group

        screenOptions={{
          headerShown: false, headerShadowVisible: false, headerTransparent: true,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_right'
        }}>
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
          headerTitleStyle: { color: colors.grey45 },
          headerLeft: () => <Feather onPress={() => navigate.goBack()} style={{ marginRight: 20 }} size={22} color={colors.grey45} name='arrow-left' />
        }} name='Verification' component={VerificationCode}
        />

        <Stack.Screen options={{
          headerShown: true,
          headerTransparent: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.background
          },
          headerTitleStyle: { color: colors.grey45 },
          // headerLeft: () => <Feather onPress={() => navigate.goBack()} style={{ marginRight: 20 }} size={22} color={colors.grey45} name='arrow-left' />
        }} name='Feeds' component={FeedList}
        />

        <Stack.Screen options={{
          headerShown: true,
          headerTransparent: false,
          headerShadowVisible: false,
          
          headerStyle: {
            backgroundColor: colors.background
          },
          headerTitleStyle: { color: colors.grey45 },
          headerLeft: () => <Feather onPress={() => navigate.goBack()} style={{ marginRight: 20 }} size={22} color={colors.grey45} name='arrow-left' />
        }}

          name='OpenFeed' component={OpenFeed}
        />
        <Stack.Screen options={{
          headerShown: true,
          headerTransparent: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.background
          },
          headerTitleStyle: { color: colors.grey45 },
          headerLeft: () => <Feather onPress={() => navigate.goBack()} style={{ marginRight: 20 }} size={22} color={colors.grey45} name='arrow-left' />
        }}

          name='Feed2' component={OpenFeed}
        />

      </Stack.Group>



    </Stack.Navigator>
  )

}
