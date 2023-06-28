import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Image, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';


import { TouchableOpacity } from 'react-native';

import { ActivityIndicator } from 'react-native';
import colors from '../constants/colors';

const defaultProfile = require('../../assets/image/userImage.jpeg')
export default function ProfileImage({ style = { height: 80, width: 80 },stateUserData={}, profileImage=undefined as any,uid='',showEditButton=true}) {
    const dispatch= useDispatch()
    const imageSource= profileImage?{uri:profileImage}:defaultProfile
    const [image, setimage] = useState(imageSource)
    const [errors, seterrors] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {
        if (errors!==null) {
          Alert.alert("An error has occurred", errors)
        }
      }, [errors])
    // const pickImage = async () => {

    //     try {
    //         // const assets = await lunchImagePicker()
            
    //         if (assets) {
    //             setisLoading(true)
    //             // setimage({uri:assets[0].uri})
                
    //             const uploadUrl=await uploadProfileImage(assets[0].uri)
    //             if(!uploadUrl){
    //                 throw new Error("Failed to upload profile image")
    //             }
    //             const newData={userProfileImage:uploadUrl}
                
    //             dispatch(updateLoggedInUser({newData}))
    //             setisLoading(false)
    //            await UpdateAuthActioins(uid,newData,seterrors)
               
    
    //         }
    //     } catch (error:any) {
    //         setisLoading(false)
    //         seterrors(error.message)
    //     }

    // }

    const viewProfile = async () => {
        console.log("view profile")
    }
    return (
        <View  >

            {isLoading?(
                <View style={{ ...styles.loadingContainer,...style }}>
                       <ActivityIndicator size={'small'} color={'black'}/>
           
                </View>
              ):(
                <Image style={{ ...styles.image, ...style }} source={image} />
            )}
           
           {
            showEditButton && !isLoading&& (
                  <View style={styles.editContainer}>
                <FontAwesome name="pencil"
                    size={15} color={'black'} />
            </View>
            )
           }
          
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    image: {
        borderRadius: 50,
        borderColor: colors.grey,
        borderWidth: 1,

    },
    editContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: colors.lightGrey,
        borderRadius: 20,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    }
});
