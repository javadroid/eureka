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
import StudentDashboard from '../screens/StudentDashboard'
import NewsPage from '../screens/NewsPage'
import TimeTable from '../screens/Timetable/TimeTable'


const Stack = createNativeStackNavigator()
export  function LectureNoteFlows() {
    return (
      <Stack.Navigator screenOptions={{  headerTransparent:true,
        headerTitle:'',
        headerTitleAlign: 'center'}} initialRouteName='LectureNotesList'>
        <Stack.Group screenOptions={{ }}>
          <Stack.Screen name='LectureNotesList' component={LectureNotesList} options={{
            // headerShown: false
            
          }} />
          <Stack.Screen name='LectureNotes' component={LectureNotes} options={{
            // headerShown: false
            
          }} />
        </Stack.Group>
  
  </Stack.Navigator>
    )
  }
  
  export function TimetableFlow(){
    return(
      <Stack.Navigator screenOptions={{
        headerTransparent:true,
        headerTitle:'',
        headerTitleAlign: 'center',
      }} initialRouteName='Timetable'>
        
  
        <Stack.Group screenOptions={{
          headerTitle: '',
          headerTransparent: true,
          presentation: "containedModal"
        }}>
          <Stack.Screen options={{
            headerTitle: '',
            headerTitleAlign: 'center',
  
          }} name='Timetable' component={TimeTable} />
  
        </Stack.Group>
  
        
  
  </Stack.Navigator>
    )
  }
  export  function PQFlow() {
    return (
      <Stack.Navigator screenOptions={{
        headerTransparent:true,
        headerTitle:'',
        headerTitleAlign: 'center',
      }} initialRouteName='YearLists'>
        
  
        <Stack.Group screenOptions={{
          headerTitle: '',
          headerTransparent: true,
          presentation: "containedModal"
        }}>
         
  
        </Stack.Group>
  
        <Stack.Group screenOptions={{
          headerTitle: '',
          headerTransparent: true,
          presentation: "containedModal"
        }}>
          <Stack.Screen options={{
            headerTitle: '',
            headerTitleAlign: 'center',
  
          }} name='SectionList' component={SectionList} />
  
        </Stack.Group>
        <Stack.Group screenOptions={{
          headerTitle: '',
          headerTransparent: true,
          presentation: "containedModal"
        }}>
          <Stack.Screen options={{
            headerTitle: '',
            headerTitleAlign: 'center',
  
          }} name='AsigningRep' component={AsigningRep} />
  
        </Stack.Group>
  
        <Stack.Group screenOptions={{
          headerTitle: '',
          headerTransparent: true,
          presentation: "containedModal"
        }}>
         
  
      <Stack.Screen options={{
            headerTitle: '',
            headerTitleAlign: 'center',
  
          }} name='CourseList' component={CourseList} />
  
  
  <Stack.Screen options={{
            headerTitle: '',
            headerTitleAlign: 'center',
  
          }} name='Questions' component={Questions} />
      
      <Stack.Screen options={{
            headerTitle: '',
            headerTitleAlign: 'center',
  
          }} name='YearLists' component={YearList} />
      <Stack.Screen options={{
        headerTitle: '',
        headerTitleAlign: 'center',
  
      }} name='EditQuestions' component={EditQuestions} />
  
    </Stack.Group>
  
    
  </Stack.Navigator>
    )
  }

  export  function DashboardFlow() {
    return (
      <Stack.Navigator screenOptions={{
        headerTransparent:true,
        headerTitle:'',
        headerTitleAlign: 'center',
      }} initialRouteName='Dashboard'>
        
  
        <Stack.Group screenOptions={{
          headerTitle: '',
          headerTransparent: true,
          presentation: "containedModal"
        }}>
          <Stack.Screen options={{
            headerTitle: '',
            headerTitleAlign: 'center',
  
          }} name='Dashboard' component={StudentDashboard} />
  
        </Stack.Group>
  
        <Stack.Group screenOptions={{
          headerTitle: '',
          headerTransparent: true,
          presentation: "card"
        }}>
          <Stack.Screen options={{
            headerTitle: '',
            headerTitleAlign: 'center',
  
          }} name='NewsPage' component={NewsPage} />
  
        </Stack.Group>
  
  </Stack.Navigator>
    )
  }