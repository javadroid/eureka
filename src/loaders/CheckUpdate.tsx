import React, { useCallback, useEffect, useState } from 'react'
import * as Updates from 'expo-updates';

import { Alert, StyleSheet, Text, View } from 'react-native';
import MainNavigation from '../navigations/MainNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticated, setUserData, setUserToken } from '../utils/store/userSlice';
import DrawerNavigation from '../navigations/DrawerNavigation';
import Login from '../screens/Login';
import { AxiosError } from 'axios';
import setlocalRedux from '../utils/localRedux';
import { profile, findById } from '../utils/service/ApiService';
import CheckUserData from './CheckUserData';
import AuthNavigation from '../navigations/AuthNavigation';

export default function CheckUpdate() {
  const dispatch = useDispatch()
  const [updateStatus, setUpdateStatus] = useState('Checking for updates...');
  const isAuthenticated= useSelector((state:any)=> state.user.isAuthenticated)
  const userToken= useSelector((state:any)=> state.user.userToken)
 
  const userData = useSelector((state: any) => state.user.userData)
  useEffect(() => {
    async function checkForUpdates() {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          setUpdateStatus('Downloading update...');
          await Updates.fetchUpdateAsync();
          setUpdateStatus('Applying update...');
          await Updates.reloadAsync();
          setUpdateStatus('Done');
        } else {
          setUpdateStatus('No updates available');
        }
      } catch (e) {
        
        setUpdateStatus('Error checking for updates');
      }
    }

    
 // console.log("isAuthenticated",isAuthenticated)
    checkForUpdates();
 
  }, [isAuthenticated]);


  
  return (
    <>
  {/* {isAuthenticated?<CheckUserData/>:<Login/>} */}
  <AuthNavigation/>
    </>

  )
}
