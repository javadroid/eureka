import React, { useCallback, useEffect, useState } from 'react'
import * as Font from 'expo-font'
import 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InternetStatus from './InternetStatus';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import CheckUpdate from './checkUpdate';
import * as Updates from 'expo-updates';
import AppNavigation from '../navigations/AppNavigation';
import { LinearGradient } from 'expo-linear-gradient';

SplashScreen.preventAutoHideAsync()
export default function FontsLoader() {
    const [appIsLoaded, setAppIsLoaded] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        InternetStatus(dispatch)


        prepareFont()
    }, [])
    const prepareFont = async () => {
        try {
            await Font.loadAsync({
                "black": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-Black.ttf"),
                "blackItalic": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-BlackItalic.ttf"),
                "bold": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-Bold.ttf"),
                "boldItalic": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-BoldItalic.ttf"),
                "italic": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-Italic.ttf"),
                "light": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-Light.ttf"),
                "lightItalic": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-LightItalic.ttf"),
                "ExtraBoldItalic": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-ExtraBoldItalic.ttf"),
                "ExtraLight": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-ExtraLight.ttf"),
                "ExtraLightItalic": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-ExtraLightItalic.ttf"),
                "regular": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-Regular.ttf"),
                "SemiBold": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-SemiBold.ttf"),
                "SemiBoldItalic": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-SemiBoldItalic.ttf"),
                
                "interBlack": require("../../assets/fonts/Inter/Inter-Black.ttf"),
                "interBold": require("../../assets/fonts/Inter/Inter-Bold.ttf"),
                "interLight": require("../../assets/fonts/Inter/Inter-Light.ttf"),
                 "interExtraLight": require("../../assets/fonts/Inter/Inter-ExtraLight.ttf"),
                "interExtraBold": require("../../assets/fonts/Inter/Inter-ExtraBold.ttf"),
                "interRegular": require("../../assets/fonts/Inter/Inter-Regular.ttf"),
                "interSemiBold": require("../../assets/fonts/Inter/Inter-SemiBold.ttf"),
            })


        } catch (error) {
            console.error("prepareFont", error)
        }
        finally {

            setAppIsLoaded(true)
        }
    }
    const onLayOut = useCallback(async () => {
        if (appIsLoaded) {
            await SplashScreen.hideAsync()
        }
    },
        [appIsLoaded],
    )

    const colors = [
        'rgba(245, 187, 250, 0.29)',
        'rgba(255, 255, 255, 0.55)',
        'rgba(254, 249, 255, 0.987114)',
        'rgba(255, 255, 255, 0.949964)',
        'rgba(255, 255, 255, 0.84049)',
        '#F7E9F8'
    ];
    if (!appIsLoaded) {
        return null
    } else {

        return (
        
                <SafeAreaProvider style={{ flex: 1 }} onLayout={onLayOut}>
                    <AppNavigation />
                </SafeAreaProvider>
          

        )
    }

}
