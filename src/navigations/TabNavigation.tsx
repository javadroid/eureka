import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import StudentDashboard from '../screens/StudentDashboard';
import Profile from '../screens/Profile';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator()
export default function TabNavigation() {
  const colors = [
    'rgba(245, 187, 250, 0.29)',
    'rgba(255, 255, 255, 0.55)',
    'rgba(254, 249, 255, 0.987114)',
    'rgba(255, 255, 255, 0.949964)',
    'rgba(255, 255, 255, 0.84049)',
    '#F7E9F8'
  ];
  return (
    <Tab.Navigator screenOptions={{  headerShadowVisible: false,headerTransparent: false, }}>
      <Tab.Screen options={{
        headerTitle: 'false',
        headerStyle:{
          backgroundColor: 'transparent',
          // elevation: 0,
        },

        
       headerBackground:()=> <LinearGradient colors={colors} style={{flex:1 }}
      
     />,
     

        tabBarIcon: ({ color, size }) => <Ionicons name="chatbubble-outline" size={size} color={color} />
      }} name='SstudentDashboard' component={StudentDashboard} />
      <Tab.Screen options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />
      }} name='profile' component={Profile} />
    </Tab.Navigator>
  )
}
