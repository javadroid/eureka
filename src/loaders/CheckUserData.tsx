import { View, Text, Alert } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import DrawerNavigation from '../navigations/DrawerNavigation'
import { useDispatch, useSelector } from 'react-redux';
import { AxiosError } from 'axios';
import setlocalRedux from '../utils/localRedux';
import { profile, findById } from '../utils/service/ApiService';
import { setIsAuthenticated, setUserData } from '../utils/store/userSlice';

export default function CheckUserData() {


    const dispatch = useDispatch()
    const [updateStatus, setUpdateStatus] = useState('Checking for updates...');
    const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated)
    const userToken = useSelector((state: any) => state.user.userToken)
    const [errorMessage, setErrorMessage] = useState('')
    const userData = useSelector((state: any) => state.user.userData)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        checkLoggedIn()
    }, [])

    useEffect(() => {

        if(userData){
            setLoading(false)
        }
        
    }, [userData])

    const checkLoggedIn = useCallback(async () => {
        if (!isAuthenticated) {
            setlocalRedux({ key: "isAuthenticated", data: true, dispatch, method: setIsAuthenticated })
            return
        }

        const data = await profile('students', userToken?.access_token)
            .catch((err: AxiosError) => {
                if (err.response?.data.message == "Unauthorized") {
                    setErrorMessage("User Unauthorized")
                } else if (err.response?.data.message === "User Logged in with another device") {
                    setlocalRedux({ key: "isAuthenticated", data: false, dispatch, method: setIsAuthenticated })
                    Alert.alert('Unauthorized', 'User Logged in with another device')

                } else {
                    // console.log("err.response?.data",err.message)
                }
            })
        // console.log(data,userToken)
        if (data) {
            setlocalRedux({ key: "isAuthenticated", data: true, dispatch, method: setIsAuthenticated })
            const user = await findById('students', userToken?.id).catch((err: AxiosError) => {
                // console.log(err.message)
            })
            if (user) {
                setlocalRedux({ key: "userData", data: user, dispatch, method: setUserData })

            }
        }
    }, [])

    if (!loading){
        return (
            <DrawerNavigation  />
        )
    }else{
        
        return (
           <Text> Loading</Text>
        )
    }
}