import React, {  } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainNavigation from './MainNavigation';
import {CustomSideMenu} from '../components/customComponnents/CustomSideMenu';
import { TimetableFlow } from './SideNavigation';
import Register from '../screens/Register';

export default function DrawerNavigation() {
const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={prop=><CustomSideMenu {...prop}/>} screenOptions={{
      headerShown: false,
      headerTransparent:true
    }}initialRouteName={'MainNavigation'}>


    <Drawer.Screen  name="MainNavigation" component={MainNavigation} />
    
    
    <Drawer.Screen name="TimetableFlow" component={TimetableFlow} />
        <Drawer.Screen name='Register' component={Register} />
    </Drawer.Navigator>
  )
}