import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import StudentDashboard from '../screens/StudentDashboard';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator()
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerTitle: '', headerShadowVisible: false, }}>
      <Tab.Screen options={{
        headerTitle: '',
        tabBarIcon: ({ color, size }) => <Ionicons name="chatbubble-outline" size={size} color={color} />
      }} name='SstudentDashboard' component={StudentDashboard} />
      <Tab.Screen options={{
        headerTitle: '',
        tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />
      }} name='profile' component={Profile} />
    </Tab.Navigator>
  )
}
