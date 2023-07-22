import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, useWindowDimensions, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';


export const DrawerComponent = ({ zIndex, setzIndex, listNumber ,setContent}) => {
   
    const { width } = useWindowDimensions();
    const threshold = 30; // Position threshold to open/close the drawer
    const boxWidth = useRef(new Animated.Value(0)).current;
    // const [zIndex, setzIndex] = useState(0)

    useEffect(() => {
        if (!zIndex) {
            Animated.spring(boxWidth, {
                toValue: 0,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.spring(boxWidth, {
                toValue: width,
                useNativeDriver: false,
            }).start();
        }

    }, [zIndex])

    // const panResponder2 = PanResponder.create({
    //     onMoveShouldSetPanResponder: () => true,
    //     onPanResponderMove: (evt, gestureState) => {

    //          // console.log(gestureState.dx)
    //             boxWidth.setValue(boxWidth._value -  gestureState.dx/10);
    //     },
    //     onPanResponderRelease: (_, gesture) => {
    //         if (gesture.dx < -threshold) {
    //        // console.log('first')

    //         } else{
    //          // console.log('second')
    //             Animated.spring(boxWidth, {
    //                 toValue: 5,
    //                 useNativeDriver: false,
    //             }).start();
    //         }
    //     },

    // });
    const active = { zIndex: 1, width: '100%', height: '100%', flex: 1, position: 'absolute' }
    const inactive = {
        zIndex: 1, bottom: 0, right: 0,
        backgroundColor: 'red', position: 'absolute'
    }

    return (
        <View style={zIndex ? active : inactive}>
            <Pressable onPress={() => {
                setzIndex(false)

            }}
                style={{ flex: 1, backgroundColor: 'transparent' }}

            >
                {/* Your main content */}
            </Pressable>
            <Animated.View
                style={{
                    width: boxWidth,
                    height: 62,
                    bottom: 0,
                    right: 0,
                    marginVertical: 10,
                    maxWidth: width,
                    minWidth: 0,
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    // borderColor:colors.primaryHover,
                    // borderWidth:0.5,
                }}

            >

                <ScrollView horizontal  style={{ flexDirection: 'row', display: 'flex' }}>
                    {listNumber.map((_id: any, i: number) =>
                        <TouchableOpacity onPress={()=>setContent(i)} key={i} style={styles.questionHeader}>
                            <Text style={styles.questionHeaderText}>{_id.no}</Text>
                        </TouchableOpacity>
                    )}
                </ScrollView>

            </Animated.View>
        </View>


    );
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'flex-start'

    },
    headerTitle: {
        marginTop: 80,
        marginBottom: 30,
        fontFamily: 'regular',
        fontSize: fontSize.body.fontSize,
        lineHeight: fontSize.body.lineHeight,
        color: colors.textColor,
        alignSelf: 'center',
    },
    questionHeader: {
        borderRadius: 50,
        borderColor:colors.primaryHover,
                    borderWidth:0.5,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        paddingVertical: 0,
        paddingHorizontal: 5,
        marginHorizontal: 10,
        minWidth: 50,
        flexShrink: 0,
        height: 50,
        display: 'flex',


    },
    questionHeaderText: {
        fontFamily: 'bold',
        fontSize: fontSize.body.fontSize,
        lineHeight: fontSize.body.lineHeight,
        color: colors.primaryHover,
        // alignSelf: 'center',
    },


    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalView: {
        // margin: 20,
        backgroundColor: colors.primaryHover,

        padding: 40,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalViewHeaderText: {
        fontFamily: 'bold',
        fontSize: fontSize.title.fontSize,
        lineHeight: fontSize.title.lineHeight,
        color: "white",
        marginBottom: 30,
    },
    modalButtons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        // width:'100%',
    },
    Button: {
        backgroundColor: 'white',
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalButtonText: {
        fontFamily: 'interRegular',
        fontSize: fontSize.caption.fontSize,
        lineHeight: fontSize.caption.lineHeight,
        color: colors.textColor,
        textAlign: 'center',
    },
    modalTextInput: {
        alignSelf: 'flex-start',
        fontFamily: 'interRegular',
        fontSize: fontSize.body.fontSize,
        lineHeight: fontSize.body.lineHeight,
        color: colors.textColor,
        width: 220,
        height: 62,
        padding: 10,
        paddingTop: -100,
        backgroundColor: colors.primaryInactive,
        marginBottom: 30,
    },
    displayContainer: {
        display: 'flex',
        flex: 1,

    },


    htmlBoxStyle: {

        backgroundColor: "transparent",
        // borderRadius: 20,
        padding: 10,
        // margin:5,
        flex: 1,
        display: 'flex',
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
        // borderWidth: 1,
        // borderColor: "#ccaf9b",
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.23,
        // shadowRadius: 2.62,
        // elevation: 4,

    },




})