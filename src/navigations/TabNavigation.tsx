import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import StudentDashboard from '../screens/StudentDashboard';
import Profile from '../screens/Profile';
import { LinearGradient } from 'expo-linear-gradient';
import YearList from '../screens/pq/YearList';
import LectureNotes from '../screens/lecture/LectureNotes';
import ChatGPT from '../screens/chatGPT';
import ChatList from '../screens/chat/ChatList';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ImageIconHome, ImageIconLectureNotes, ImageIconPQ } from './ImageIcon';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  DashboardFlow, LectureNoteFlows, PQFlow } from './SideNavigation';
import { FontAwesome } from '@expo/vector-icons';
import TimeTable from '../screens/Timetable/TimeTable'
import { AntDesign } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();
export default function TabNavigation() {

  return (

    <Tab.Navigator screenOptions={{
      headerShadowVisible: false,
      headerTransparent: true, headerTitleAlign: 'center',
      tabBarShowLabel: false,
      headerShown: false,
      tabBarHideOnKeyboard: true,
      // tabBarBackground:'red',
      tabBarStyle: {
        height: 50,
       
                // backgroundColor: 'black',
                elevation: 2,

        // width:'100%'
      }

    }}>
      <Tab.Screen options={{
        headerTitle: '',
        headerShown: false,
        tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />
      }} name='StudentDashboard' component={DashboardFlow} />

      <Tab.Screen options={{

        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="robot-happy-outline" size={size} color={color} />
      }} name='chatGPT' component={ChatGPT} />

      <Tab.Screen options={{
        tabBarIcon: ({ color, size }) => <ImageIconPQ />
      }}
        name='YearList' component={PQFlow} />

      <Tab.Screen options={{
        tabBarIcon: ({ color, size }) => <FontAwesome name="pencil-square-o" size={size} color={color}/>
      }} name='LectureNoteFlows' component={LectureNoteFlows} />






      <Tab.Screen options={{

        tabBarIcon: ({ color, size }) => <Ionicons name="md-chatbubbles-outline" size={25} color={color} />
      }} name='ChatList' component={ChatList} />


    </Tab.Navigator>



  )
}
