import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function setlocalRedux({key,data,dispatch ,method}) {
// console.log(key)
    dispatch(method({[key]:data}))
AsyncStorage.setItem(key,JSON.stringify(data))

}