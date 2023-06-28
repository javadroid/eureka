import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import TabNavigation from './TabNavigation'
import Login from '../screens/Login'
import HeaderBackground from '../components/header/HeaderBackground'
import Register from '../screens/Register'
import Profile from '../screens/Profile'
import fontSize from '../constants/fontSize'
import colors from '../constants/colors'
import SectionList from '../screens/Admins/SectionList'
import AsigningRep from '../screens/Admins/AsigningRep'
import YearList from '../screens/pq/YearList'
import CourseList from '../screens/pq/CourseList'
import Questions from '../screens/pq/Questions'
import EditQuestions from '../screens/pq/EditQuestions'
import LectureNotesList from '../screens/lecture/LectureNotesList'
import LectureNotes from '../screens/lecture/LectureNotes'


const Stack = createNativeStackNavigator()
export default function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName='YearLists'>
      <Stack.Group screenOptions={{ headerShadowVisible: false }}>
        <Stack.Screen name='Home' component={TabNavigation} options={{
          headerShown: false
        }} />
      </Stack.Group>

      <Stack.Group screenOptions={{
        headerTitle: '',
        headerTransparent: true,
        presentation: "containedModal"
      }}>
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen options={{
            headerTitle: '',
            headerTitleAlign: 'center',
  
          }} name='Profile' component={Profile} />
      </Stack.Group>

   

  
</Stack.Navigator>
  )
}


