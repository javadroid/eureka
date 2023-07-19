import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Image, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';


import { TouchableOpacity } from 'react-native';

import { ActivityIndicator } from 'react-native';
import colors from '../constants/colors';
import { lunchImagePicker, } from '../utils/helper/ImageHelper';
import { uploadProfileImage } from '../utils/service/ApiService';
import { AxiosError } from 'axios';
import setlocalRedux from '../utils/localRedux';
import { setUserData } from '../utils/store/userSlice';
import { userImage } from '../../assets/image/ImagesIndex';


export default function ProfileImage({ style = { height: 80, width: 80 },setImage, stateUserData = {}, profileImage = undefined as any, uid = '', showEditButton = true }) {
    const dispatch = useDispatch()
    const imageSource = profileImage ? { uri: profileImage } : userImage
    const [image, setimage] = useState(imageSource)
    const [errors, seterrors] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const userData = useSelector((state: any) => state.user.userData)
    useEffect(() => {
        if (errors !== null) {
            Alert.alert("An error has occurred", errors)
        }
    }, [errors])
    const pickImage = async () => {

        try {
            const assets = await lunchImagePicker()

            if (assets) {
                setisLoading(true)
                setimage({uri:assets[0].uri})
               
                setisLoading(false)
                setImage(assets[0])
                 

            }
        } catch (error: any) {
            setisLoading(false)
            seterrors(error.response.data.message)
        }

    }

    const viewProfile = async () => {
     // console.log("view profile")
    }

    const ViewType = showEditButton ? TouchableOpacity : View
    return (
        <ViewType onPress={pickImage}  >

            {isLoading ? (
                <View style={{ ...styles.loadingContainer, ...style }}>
                    <ActivityIndicator size={'small'} color={'black'} />

                </View>
            ) : (
                <Image style={{ ...styles.image, ...style }} source={image} />
            )}

            {
                showEditButton && !isLoading && (
                    <View style={styles.editContainer}>
                        <FontAwesome name="pencil"
                            size={15} color={'black'} />
                    </View>
                )
            }

        </ViewType>
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
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
