import React, { useEffect, useRef, useState } from 'react'
import {
    Animated,
    Dimensions,
    View,
    StyleSheet,
    TouchableHighlight,
    TouchableNativeFeedback,
    PanResponder,
} from 'react-native';
import { Modal, Portal, Text, Button, Provider, PaperProvider, ActivityIndicator } from 'react-native-paper';
import colors from '../../constants/colors';
import { Pressable } from 'react-native';
import { useAnimatedGestureHandler } from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
import { BackHandler } from 'react-native';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default function CustomPaperModal({ children, hideModal,modalstyle={},modalPage={},containerstyles={}}) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
        const backHandler = BackHandler.addEventListener('hardwareBackPress', hideModal);
        return () => backHandler.remove();
    }, [])




    // const panResponder = PanResponder.create({
    //     onStartShouldSetPanResponder: () => true,
    //     onMoveShouldSetPanResponder: () => true,
    //     onPanResponderGrant: () => {
    //         console.log("started")
    //     },
    //     onPanResponderMove: (e, gs) => {

    //         const posit = Math.max(20, gs.moveY) / 10
    //         console.log({ deviceHeight, diff: deviceHeight - posit, posit: Math.max(20, gs.moveY) / 10, test: Math.max(20, gs.y0) / 10 })
    //         Animated.timing(modalY, {
    //             duration: 300,
    //             toValue: deviceHeight - posit * 2,
    //             useNativeDriver: false
    //         }).start();

    //     },
    //     onPanResponderRelease: (e, gs) => {

    //         const posit = Math.max(20, gs.moveY) / 10
    //         console.log("done", { posit: Math.max(20, gs.moveY) / 10, test: Math.max(20, gs.y0) / 10 })
    //         if ((Math.max(20, gs.y0) / 10) * 2 <= Math.max(20, gs.moveY) / 10) {
    //             closeModal()
    //         } else {
    //             openModal()
    //         }
    //     },
    // });
    return (

        <View style={{ ...styles.container,...containerstyles }} >

            <Pressable onPress={hideModal}
                style={{ flex: 1, opacity: 0.2, }}

            >
            </Pressable>


            <View style={{ ...styles.modalPage,...modalPage }}>
                <View style={styles.modalButton}>
                    <View style={styles.modalButtonLine} ></View>
                </View>
                {/* {
                    loading ? (
                        <ActivityIndicator animating={true} color={colors.button1} />
                    ) : (
                        <>{children}</>
                    )
                } */}
                 <View style={{  flex:1,...modalstyle,display:"flex",  justifyContent: "flex-end",  }}>
                {children}
                </View>

            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        zIndex: 1000,
        display: "flex",
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        flexDirection: "column",
        backgroundColor: 'transparent',
         marginBottom: 80,
        // justifyContent: "flex-end",
        // alignItems:"flex-start",


    },

    modalPage: {
        backgroundColor: "black",
        borderTopLeftRadius: 40,
        padding: 10,
        borderTopRightRadius: 40,
        minHeight: "60%",
        display:"flex",
        width:"100%",
        maxHeight: "80%"
    },
    modalButton: {
        // zIndex:100000000,
        marginVertical: 5,
        height: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.grey4,
        width: "15%",
        alignSelf: "center",
        borderRadius: 400,
    },
    modalButtonLine: {
        height: 1,
    }
});
