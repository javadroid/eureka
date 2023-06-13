import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import TabNavigation from './TabNavigation'


const Stack = createNativeStackNavigator()
export default function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Group screenOptions={{}}>
        <Stack.Screen name='Home' component={TabNavigation} options={{
          headerShown: false
        }} />
      </Stack.Group>

      {/* <Stack.Group screenOptions={{ presentation: "containedModal" }}>
        <Stack.Screen name='NewChat' component={NewChatScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  )
}
