import React, { useCallback, useEffect, useState } from 'react'
import * as Font from 'expo-font'
import 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InternetStatus from './InternetStatus';

SplashScreen.preventAutoHideAsync()
export default function FontsLoader() {
    const [appIsLoaded, setAppIsLoaded] = useState(false)


    useEffect(() => {

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
                "medium": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-Medium.ttf"),
                "mediumItalic": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-MediumItalic.ttf"),
                "regular": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-Regular.ttf"),
                "thin": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-Thin.ttf"),
                "thinItalic": require("../../assets/fonts/Nunito-Sans-Font/NunitoSans-ThinItalic.ttf"),
            })
        } catch (error) {
            console.log("prepareFont", error)
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
    if (!appIsLoaded) {
        return null
    } else {
        return (
            <SafeAreaProvider style={{ flex: 1 }} onLayout={onLayOut}>

            </SafeAreaProvider>
        )
    }

}
