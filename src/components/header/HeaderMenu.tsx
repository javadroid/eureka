import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import UserCardItem from './UserCardItem'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../constants/colors'
import fontSize from '../../constants/fontSize'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import ProfileImage from '../ProfileImage';

export function HeaderMenu({ backButton = true, navigation, headerTitle = '', headerTitleStyle = {} as any }) {
  
  const userData =  useSelector((state: any) => state.user.userData)
  const image = userData?.profileImage 
  // console.log(userData?.profileImage,"ll")
  useEffect(() => {
   
// console.log("first")
    navigation.setOptions({
      headerRightContainerStyle: {
        marginRight: 20
      },
      headerLeftContainerStyle: {
        marginLeft: 20
      },
      headerLeft: backButton ? () => {
        return (
        <TouchableOpacity  
        activeOpacity={0.6}
        onPress={() => navigation.openDrawer()}>
          <AntDesign name="menu-fold" size={24} color={colors.black} />
        </TouchableOpacity>
        ) 
      } : () => {
        return (
          <View>
            <TouchableOpacity
            activeOpacity={0.6} 
            onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={28} color={colors.backgroundWhite} />
            </TouchableOpacity>
          </View>
        )


      },
      headerTitle,
      headerTitleStyle: { ...{ fontFamily: 'bold', fontSize: fontSize.title.fontSize, color: colors.textColor }, ...headerTitleStyle, },
      headerRight: () => {


        return <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons style={{}} name="notifications-outline" size={24} color={colors.primaryHover} />
          <Text style={{ width: 10, height: 10, backgroundColor: colors.primaryHover, marginLeft: -10, borderRadius: 50, marginRight: 5, padding: 5 }}></Text>
          <TouchableOpacity
           activeOpacity={0.6}
          onPress={() => navigation.navigate('Profile')}>
            {/* <UserCardItem /> */}
            <ProfileImage style={{ height: 30, width: 30 }} showEditButton={false} profileImage={image} />
          </TouchableOpacity>
        </View>
      },
    })
  }, [])
  return (

    <></>

  )
}
export function HeaderProfileMenu({ onChangeTextHandler, onPress, data, hideEdit = false, setEditable, editable, navigation = undefined as any, headerTitle = 'CSC 419', headerTitleStyle = undefined as any }) {

  useEffect(() => {
    // console.log(data)
    navigation.setOptions({
      headerRightContainerStyle: {
        marginRight: 20
      },
      headerLeftContainerStyle: {
        marginLeft: 20
      },
      headerLeft: () => {
        return <View>


          <TouchableOpacity 
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={28} color={colors.backgroundWhite} />
          </TouchableOpacity>
        </View>


      },
      headerTitle,
      headerTitleStyle: { ...{ fontFamily: 'bold', fontSize: fontSize.title.fontSize, color: colors.textColor }, ...headerTitleStyle, },
      headerRight: !hideEdit ? () => {
        return <TouchableOpacity 
          activeOpacity={0.6}
          onPress={editable ? onPress : () => setEditable(true)}>
            <MaterialCommunityIcons name={editable ? "check" : "account-edit-outline"} size={28} color={colors.backgroundWhite} />
          </TouchableOpacity>
      } : () => { },

    })

  }, [editable, onChangeTextHandler, data])


  return (

    <></>

  )
}

export function HeaderWithBackMenu({ navigation = undefined as any }) {

  useEffect(() => {
    navigation.setOptions({
      // headerLeft:()=>{
      //   return <AntDesign name="arrowleft" size={28} color={'black'} />
      // },
      // headerTitle,
      // headerTitleStyle:{...{fontFamily:'bold',fontSize:fontSize.title.fontSize,color:colors.textColor},...headerTitleStyle,},
      headerRight: () => {
        return <Feather name="edit-3" size={24} color="black" />
      },

    })
  }, [])
  return (

    <></>

  )
}
