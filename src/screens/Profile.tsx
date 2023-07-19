import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import CustomPageCointainer from '../components/customComponnents/CustomPageContainer';
import { LinearGradient } from 'expo-linear-gradient';
import { HeaderMenu, HeaderProfileMenu } from '../components/header/HeaderMenu';
import fontSize from '../constants/fontSize';
import colors from '../constants/colors';
import ProfileImage from '../components/ProfileImage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { formReducer } from '../utils/reducers/FormReducers';
import FormActions from '../utils/actions/FormActions';
import { update, uploadProfileImage } from '../utils/service/ApiService';
import { AxiosError } from 'axios';
import setlocalRedux from '../utils/localRedux';
import { setUserData } from '../utils/store/userSlice';


export default function Profile({ navigation }) {
  const dispatch = useDispatch()
  const [editable, setEditable] = useState(false)
  const Viewtype = editable ? TextInput : Text
  const userData = useSelector((state: any) => state.user.userData)
  let initialState = {
    inputValue: {
      username: userData?.username,
      phoneNo: userData?.phoneNo,
      email: userData?.email,
      level: userData?.level,
      about: userData?.about,
      profileImage: userData?.profileImage

    },
    inputValidities: {
      username: true,
      phoneNo: true,
      email: true,
      level: true,
      profileImage: true,
      about: true
    },
    formValid: true
  }


  const [formState, dispatchFormState] = useReducer(formReducer, initialState)
  let [submitData, setSubmitData] = useState()
  let [Image, setImage] = useState()

  const onChangeTextHandler = useCallback((inputId: any, inputValue: any) => {
    const result = (FormActions(inputId, inputValue))
    dispatchFormState({ inputId, validationResult: result, inputValue })
    submitData = formState.inputValue
    setSubmitData(formState.inputValue)
  }, [dispatchFormState, formState])

  const HandleSubmit = useCallback(async (data,img) => {

    if (editable) {

      setEditable(true)
    } else {
      // console.log(" blob", img)
      
        
        const blob :any= await new Promise((resolve, reject)=>{
          const xhr = new XMLHttpRequest();
          xhr.onload = () => {
              resolve(xhr.response)
          }
  
          xhr.onerror=(e) => {
              reject(new TypeError("Network request failed"))
          }
  
          xhr.responseType="blob"
          xhr.open("GET",data.profileImage?.uri,true)
          xhr.send()
      })
      const blobObject = {...blob.data}
      blobObject.uri=data.profileImage?.uri
      blobObject.base64=data.profileImage?.base64
  
      const formdata = new FormData();
      formdata.append('file', blobObject, blobObject.name);
      const sss= await uploadProfileImage(formdata)
      data.profileImage=sss
      // console.log(" blob", sss)
      
      // console.log("data", data)
      // const imageUrl= uploadProfileImage('')
      const result = await update('students', userData?._id, data)
        .catch((err: AxiosError) => {
          // console.log(err.response?.data)
          Alert.alert('Error', err.message)
        });
      // console.log("result", result)
      if (result) {
        Alert.alert('Success', 'Profle updated successfully')
         setlocalRedux({key:"userData",data:{...userData,...result},dispatch,method:setUserData})
        setEditable(false)
      }
    }

  }, [])

  useEffect(() => {
    // console.log(Image)

    initialState = {
      inputValue: {
        username: userData?.username,
        phoneNo: userData?.phoneNo,
        email: userData?.email,
       
        level: userData?.level,
        about: userData?.about,
        profileImage: userData?.profileImage
  
      },
      inputValidities: {
        username: true,
        phoneNo: true,
        email: true,
      
        level: true,
        profileImage: true,
        about: true
      },
      formValid: true
    }
  }, [userData])

useEffect(()=>{
  dispatchFormState({ inputId:"profileImage", validationResult: true, inputValue:Image })
},[Image])
  return (
    <>
      <View style={styles.container}>
        <HeaderProfileMenu  onChangeTextHandler={onChangeTextHandler} data={submitData} onPress={() => HandleSubmit(formState.inputValue,Image)} editable={editable} setEditable={setEditable} headerTitleStyle={{ fontFamily: 'bold', fontSize: fontSize.header3.fontSize, color: colors.backgroundWhite }} headerTitle='Profile' navigation={navigation} />
        <View style={styles.topDesign}></View>
        <SafeAreaView edges={['right', 'left', 'bottom', 'top']} style={{ display: 'flex', flex: 1, }}>
          <View style={styles.topBox}>
            <ProfileImage setImage={setImage} profileImage={userData?.profileImage} showEditButton={editable} />
            <Text style={styles.topBoxTitle}>{userData?.fullname}</Text>

            <View style={{ ...styles.lineDivider, }}></View>
            <Viewtype onChangeText={(text: string) => onChangeTextHandler('about', text)} style={{ ...styles.about, backgroundColor: Viewtype === TextInput ? colors.errors : undefined, }}>{userData?.about}</Viewtype>
          </View>

          <ScrollView style={styles.bottomContainers}>

            <BottomContainer id2={'username'} onChangeTextHandler={onChangeTextHandler} Viewtype2={Viewtype} style={{ backgroundColor: 'white' }} IconPage1={MaterialCommunityIcons} IconPage2={FontAwesome}
              iconName1={true ? 'gender-female' : 'gender-male'} iconName2={'user-o'} text1={userData?.gender} text2={userData?.username} />
            <BottomContainer id1={'phoneNo'} id2={'email'} onChangeTextHandler={onChangeTextHandler} Viewtype1={Viewtype} Viewtype2={Viewtype} IconPage1={Feather} IconPage2={Ionicons}
              iconName1={'phone-call'} iconName2={'mail-open-outline'} text1={userData?.phoneNo} text2={userData?.email} />
            <BottomContainer id1={'level'} onChangeTextHandler={onChangeTextHandler} Viewtype1={Viewtype} style={{ backgroundColor: 'white' }} IconPage1={FontAwesome} IconPage2={FontAwesome}
              iconName1={'level-up'} iconName2={'id-card-o'} text1={userData?.level} text2={userData?.matricNo} />
            <BottomContainer IconPage1={MaterialCommunityIcons} IconPage2={MaterialCommunityIcons}
              iconName1={'school-outline'} iconName2={'school-outline'} text1={userData?.faculty} text2={userData?.department} />

          </ScrollView>


        </SafeAreaView>


      </View>
    </>

  )
}
const BottomContainer = ({ onChangeTextHandler, id1, id2, Viewtype1 = Text, Viewtype2 = Text, style = undefined as any, IconPage1 = Feather as any, IconPage2 = Feather as any, iconName1 = '' as any, iconName2 = '' as any, text1 = '', text2 = '' }) => {

  return (
    <View style={{ ...styles.bottomContainer, ...style }}>

      <IconPage1 name={iconName1} size={24} color={style ? colors.primaryHover : "white"} />

      <Viewtype1 onChangeText={(text: string) => onChangeTextHandler(id1, text)} style={{ ...styles.profileText, ...{ backgroundColor: Viewtype1 === TextInput ? colors.errors : undefined, marginBottom: 8, color: style ? "black" : "white" } }}>{text1}</Viewtype1>
      <View style={{ ...styles.lineDivider, ...{ backgroundColor: colors.primaryInactive, marginBottom: 8, } }}></View>
      <IconPage2 name={iconName2} size={24} color={style ? colors.primaryHover : "white"} />
      <Viewtype2 onChangeText={(text: string) => onChangeTextHandler(id2, text)} style={{ ...styles.profileText, ...{ backgroundColor: Viewtype2 === TextInput ? colors.errors : undefined, color: style ? "black" : "white" } }}>{text2}</Viewtype2>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    flex: 1,
    display: 'flex',
    backgroundColor: 'white',


  },
  topDesign: {
    display: 'flex',
    backgroundColor: colors.primaryHover,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    position: 'absolute',
    width: '100%',
    height: '30%'
  },
  topBox: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 24,
    marginHorizontal: 24,

    marginTop: 100,
    borderColor: colors.borderColor,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  topBoxTitle: {
    marginTop: 15,
    fontFamily: 'bold',
    fontSize: fontSize.titleLarge.fontSize,
    lineHeight: fontSize.titleLarge.lineHeight,
    marginBottom: 25,
    color: 'black',
  },
  lineDivider: {
    display: 'flex',
    width: '100%',
    // zIndex:10,
    backgroundColor: colors.primaryHover,
    height: 2

  },
  about: {
    fontFamily: 'interRegular',
    fontSize: fontSize.caption.fontSize,
    lineHeight: fontSize.caption.lineHeight,
    // marginBottom: 25,
    color: 'black',
    textAlign: 'center',
    marginTop: 15,

  },
  bottomContainers: {

    marginTop: 15,
    marginHorizontal: 35,
    display: 'flex',



  },
  bottomContainer: {
    borderRadius: 10,
    width: '100%',
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    backgroundColor: colors.primaryHover,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 15,

  },
  profileText: {
    marginTop: 5,
    fontFamily: 'interRegular',
    fontSize: fontSize.bodySmall.fontSize,
    lineHeight: fontSize.bodySmall.lineHeight,

    color: 'white',
  },

});
