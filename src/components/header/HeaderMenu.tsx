import React, { useEffect } from 'react'
import { View ,Text, TouchableOpacity} from 'react-native'
import CustomHeaderButton from '../customComponnents/CustomHeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import UserCardItem from './UserCardItem'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../constants/colors'
import fontSize from '../../constants/fontSize'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export  function HeaderMenu({ backButton=true,navigation,headerTitle='',headerTitleStyle={} as any}) {

  useEffect(() => {
    navigation.setOptions({
      headerRightContainerStyle: {
        marginRight: 20
      },
      headerLeftContainerStyle: {
        marginLeft: 20
      },
      headerLeft:backButton?()=>{
        return <AntDesign name="menu-fold" size={24} color={colors.black} />
      }:()=>{
        return <View>


           <TouchableOpacity onPress={()=>navigation.goBack()}>
          <AntDesign name="arrowleft" size={28} color={colors.backgroundWhite} />
          </TouchableOpacity>
        </View>
        
       
      },
      headerTitle,
      headerTitleStyle:{...{fontFamily:'bold',fontSize:fontSize.title.fontSize,color:colors.textColor},...headerTitleStyle,},
      headerRight: () => {

        
        return <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <Ionicons style={{}} name="notifications-outline"  size={24} color={colors.primaryHover} />
                  <Text style={{width:10,height:10,backgroundColor:colors.primaryHover,marginLeft:-10, borderRadius:50,marginRight:5,padding:5}}></Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
                 <UserCardItem  userData={{username:'Username',matric:'2019800030'}}/> 
                 </TouchableOpacity>
        </View>
      },

    })
  }, [])
  return (
   
    <></>
   
  )
}
export  function HeaderProfileMenu({hideEdit=false,navigation=undefined as any,headerTitle='CSC 419', headerTitleStyle=undefined as any}) {

  useEffect(() => {
    navigation.setOptions({
      headerRightContainerStyle: {
        marginRight: 20
      },
      headerLeftContainerStyle: {
        marginLeft: 20
      },
      headerLeft:()=>{
        return <View>


           <TouchableOpacity onPress={()=>navigation.goBack()}>
          <AntDesign name="arrowleft" size={28} color={colors.backgroundWhite} />
          </TouchableOpacity>
        </View>
        
       
      },
      headerTitle,
      headerTitleStyle:{...{fontFamily:'bold',fontSize:fontSize.title.fontSize,color:colors.textColor},...headerTitleStyle,},
      headerRight: !hideEdit?() => {
        return  <MaterialCommunityIcons name="account-edit-outline" size={28} color={colors.backgroundWhite} />
      }: () => {},

    })
  }, [])
  return (
   
    <></>
   
  )
}

export  function HeaderWithBackMenu({navigation=undefined as any,headerTitle='CSC 419', headerTitleStyle=undefined as any}) {

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
