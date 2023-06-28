import React, { useState } from 'react'
import CustomPageCointainer from '../../components/customComponnents/CustomPageContainer'
import { HeaderMenu } from '../../components/header/HeaderMenu'
import CustomHeader from '../../components/customComponnents/CustomHeader'
import colors from '../../constants/colors'
import fontSize from '../../constants/fontSize'
import { View, StyleSheet, Text, Modal, Pressable, TouchableOpacity, TextInput, ScrollView, useWindowDimensions } from 'react-native'
import StickyButton from '../../components/button/StickyButton'
import FloatingButton from '../../components/button/FloatingButton'
import GestureRecognizer from 'react-native-swipe-gestures'
import RenderHtml from 'react-native-render-html'; 


export default function LectureNotes({ navigation }) {
    const { width } = useWindowDimensions();
    const [descHTML, setDescHTML] = useState('');
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            {/* <StickyButton /> */}
            <FloatingButton />

            <Modal animationType='fade'
                transparent={true}

                // style={{ width: 'auto', height: 'auto' }}
                visible={modalVisible}
                onRequestClose={() => {

                    setModalVisible(!modalVisible);
                }}>
                <Pressable onPress={() => setModalVisible(false)} style={styles.centeredView}>
                    <Pressable onPress={() => { }} style={styles.modalView}>
                        <Text style={styles.modalViewHeaderText}>Choose question type</Text>
                        <TextInput placeholder='Tell us more' style={styles.modalTextInput} />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.Button} onPress={() => {
                                // setModalVisible(!modalVisible);
                            }}>
                                <Text style={styles.modalButtonText}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Button} >
                                <Text style={styles.modalButtonText}>
                                    Send
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                </Pressable>

            </Modal>
            <CustomPageCointainer style={{ ...styles.container }} >
                <HeaderMenu navigation={navigation} headerTitle='CSC 419' />
                <CustomHeader style={{ ...styles.headerTitle, ...{} }} label='2019/2020 Examination' />
                <View style={styles.questionHeader}>
                    <Text style={styles.questionHeaderText}>20</Text>
                </View>

        
                    <GestureRecognizer style={{flex:1, flexDirection:'row',}}
                        onSwipeLeft={(state) => console.log(state, "left")}
                        onSwipeRight={(state) => console.log(state, "right")}
                    >
                        <View style={styles.displayContainer}>
                            <View style={styles.htmlBoxStyle}>
                                <ScrollView>
                                    <RenderHtml
                                        contentWidth={width}
                                        source={{
                                            html: descHTML
                                        }}
                                        ignoredDomTags={['video']}
                                    />
                                </ScrollView>
                            </View>
                        </View>
                    </GestureRecognizer>


            </CustomPageCointainer>
        </>

    )
}
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
        backgroundColor: colors.primaryHover,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 0,
        paddingHorizontal: 5,
        minWidth: 25,
        flexShrink: 0,
        height: 25,
        display: 'flex',


    },
    questionHeaderText: {
        fontFamily: 'bold',
        fontSize: fontSize.body.fontSize,
        lineHeight: fontSize.body.lineHeight,
        color: 'white',
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
        display:'flex',
        flex:1,
       
      },
    
    
  htmlBoxStyle: {
   
    backgroundColor: "transparent",
    // borderRadius: 20,
    padding: 10,
    // margin:5,
   flex:1,
    display:'flex',
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