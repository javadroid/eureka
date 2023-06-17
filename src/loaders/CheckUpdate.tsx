import React, { useEffect, useState } from 'react'
import * as Updates from 'expo-updates';

import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from '../navigations/MainNavigation';

export default function CheckUpdate() {
  const [updateStatus, setUpdateStatus] = useState('Checking for updates...');
  // console.log(updateStatus)
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

    checkForUpdates();
  }, []);

  return (
    <>
     <MainNavigation/>
    </>

  )
}
