import React, { useEffect, useState } from 'react'
import { currentAppVersion, getAppVersion } from '../constants/service'
import { Text, View } from 'react-native'
import InternetStatus from './InternetStatus'

export default  async function CheckVersion() {
    let s="Sss"
    let isAppVersion= null as null|Boolean
        if( getAppVersion()===currentAppVersion){
            isAppVersion=(true)
        }else{
            isAppVersion=(false)
        } 
    console.log("e", await InternetStatus())
   
    return   isAppVersion 
}
