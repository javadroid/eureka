import React, { useEffect } from 'react'
import { View ,Text} from 'react-native'
import CustomHeaderButton from '../customComponnents/CustomHeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import UserCardItem from './UserCardItem'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../constants/colors'
import fontSize from '../../constants/fontSize'

export  function HeaderMenu({navigation=undefined as any,headerTitle='CSC 419',headerTitleStyle=undefined as any}) {

  useEffect(() => {
    navigation.setOptions({
      headerLeft:()=>{
        return <AntDesign name="menu-fold" size={24} color={colors.black} />
      },
      headerTitle,
      headerTitleStyle:{...{fontFamily:'bold',fontSize:fontSize.title.fontSize,color:colors.textColor},...headerTitleStyle,},
      headerRight: () => {
        return <UserCardItem  userData={{username:'Username',matric:'2019800030'}}/>
      },

    })
  }, [])
  return (
   
    <></>
   
  )
}
export  function HeaderProfileMenu({navigation=undefined as any,headerTitle='CSC 419', headerTitleStyle=undefined as any}) {

  useEffect(() => {
    navigation.setOptions({
      headerLeft:()=>{
        return <AntDesign name="arrowleft" size={28} color={colors.backgroundWhite} />
      },
      headerTitle,
      headerTitleStyle:{...{fontFamily:'bold',fontSize:fontSize.title.fontSize,color:colors.textColor},...headerTitleStyle,},
      headerRight: () => {
        return <MaterialCommunityIcons name="account-edit-outline" size={28} color={colors.backgroundWhite} />
      },

    })
  }, [])
  return (
   
    <></>
   
  )
}
export  function HeaderMenuRight() {
  return (
   
       <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item title='New Chat'
      iconName='create-outline'
      onPress={() => {
        // navigation.navigate("NewChat")
        }} />
  </HeaderButtons>
   
  )
}
