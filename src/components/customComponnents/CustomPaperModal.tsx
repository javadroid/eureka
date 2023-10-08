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
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import colors from '../../constants/colors';
import { Pressable } from 'react-native';
import { useAnimatedGestureHandler } from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default function CustomPaperModal({ children,closePicker }) {
    const [visible, setVisible] = useState(true)
    const [modalY, setModal] = useState(new Animated.Value(deviceHeight))
    let [modalHeight, setmodalHeight] = useState(0)
    const { width,height } = useWindowDimensions();
    // const modalY = useRef(new Animated.Value(-deviceHeight)).current;
    useEffect(() => {
        openModal()
    }, [])

    const openModal = () => {
        setVisible(true)
        Animated.timing(modalY, {
            duration: 300,
            toValue: 0,
            useNativeDriver: false
        }).start();
    }

    const closeModal = async() => {
        
      await  Animated.timing(modalY, {
            duration: 300,
            toValue: deviceHeight,
            useNativeDriver: false
        }).start();
        console.log("closed")
       
        setVisible(false)
        setTimeout(()=>{
            closePicker()
        },300)
    };
   

    // const onGestureEvent = useAnimatedGestureHandler<
    //     PanGestureHandlerGestureEvent,
    //     { x: number; y: number }
    // >({
    //     onStart: (_, ctx) => {
    //         console.log({ctx})
    //     },
    //     onActive: ({ translationX, translationY }, ctx) => {
    //         console.log({translationX,translationY})
    //     },
    //     onEnd: ({ velocityX, velocityY }) => {
    //         console.log({velocityX})
    //     },
    // });
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            console.log("started")
        },
        onPanResponderMove: (e, gs) => {
           
            const posit = Math.max(20, gs.moveY) / 10
            console.log({ deviceHeight, diff: deviceHeight - posit, posit: Math.max(20, gs.moveY) /10,test: Math.max(20, gs.y0) /10 })
            Animated.timing(modalY, {
                duration: 300,
                toValue: deviceHeight - posit * 2,
                useNativeDriver: false
            }).start();

        },
        onPanResponderRelease: (e, gs) => {

            const posit = Math.max(20, gs.moveY) / 10
            console.log("done", {posit: Math.max(20, gs.moveY) /10,test:Math.max(20, gs.y0) /10 } )
            if ((Math.max(20, gs.y0) /10)*2 <= Math.max(20, gs.moveY) /10) {
                closeModal()
            } else {
                openModal()
            }
        },
    });
    return (
        <View style={{...styles.container}} >

            <Pressable onPress={() => visible ? closeModal() : openModal()}
                style={{ flex: 1, opacity: 0.2, }}

            >
            </Pressable>
            <Animated.View

                style={[
                    styles.modal,
                    {
                        transform: [
                            {
                                translateY: modalY,
                            },
                        ],
                    },
                ]}
            >
                <View style={{ ...styles.modalPage }}
                    {...panResponder.panHandlers}
                >


                    <View style={styles.modalButton}>
                        <View style={styles.modalButtonLine} ></View>
                    </View>
                    {children}
                </View>


            </Animated.View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        zIndex: 1000,
      
        flex:1,
        position:"absolute",
        top:0,
        left:0,
        bottom:0,
        right:0,
        backgroundColor: 'transparent',
       

    },
    button: {
        backgroundColor: 'green',
        alignItems: 'center',
        height: 60,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white'
    },
    modal: {

        // backgroundColor: 'black',

    },
    modalPage: {
        backgroundColor: colors.grey1,
        height: 500,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },
    modalButton: {
        marginVertical: 5,
        height: 7,
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
