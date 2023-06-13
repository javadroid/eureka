import React, { useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo';
import { useDispatch, useSelector } from 'react-redux'
import { checkConnection } from '../utils/store/internetConnectionSlice';
import { StatusBar } from 'expo-status-bar';
import { View ,Text} from 'react-native';

export default  async function InternetStatus( dispatch:any) {
        
        const netInfoState = await NetInfo.fetch();
        const isConnected = netInfoState.isConnected;
        const {details}=netInfoState
        dispatch(checkConnection({ isConnected, details}))  
}



