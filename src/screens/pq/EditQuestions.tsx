import React, { useRef, useState } from 'react'
import CustomPageCointainer from '../../components/customComponnents/CustomPageContainer'
import { HeaderMenu } from '../../components/header/HeaderMenu'
import CustomHeader from '../../components/customComponnents/CustomHeader'
import colors from '../../constants/colors'
import fontSize from '../../constants/fontSize'
import { View, StyleSheet, Text, Modal, Pressable, TouchableOpacity, TextInput } from 'react-native'
import StickyButton from '../../components/button/StickyButton'
import FloatingButton from '../../components/button/FloatingButton'
import {
    actions,
    RichEditor,
    RichToolbar,
  } from "react-native-pell-rich-editor";
  import GestureRecognizer from "react-native-swipe-gestures";
export default function EditQuestions({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false)
    let richText = useRef<any>();
    let [showDescError, setShowDescError] = useState(false);
    let [currentquestions, setcurrentquestions] = useState([] as any);
    let [descHTML, setDescHTML] = useState('QuestionContext');
    const richTextHandle = (descriptionText: React.SetStateAction<string>) => {
        if (descriptionText) {
          setShowDescError(false);
          currentquestions["question"] =descriptionText ;
          setDescHTML(descriptionText);
        } else {
          setShowDescError(true);
          setDescHTML("");
        }
      };
    return (
        <>
            <StickyButton />
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
                    <Text style={styles.questionHeaderText}>1</Text>
                </View>

                <RichEditor
                ref={richText}
                onChange={richTextHandle}
                
                initialContentHTML={descHTML}
                placeholder="Write your cool content here :)"
                
                
              />
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
        padding: 10,
        width: 'auto',
        height: 'auto',
        display: 'flex',


    },
    questionHeaderText: {
        fontFamily: 'interRegular',
        fontSize: fontSize.body.fontSize,
        lineHeight: fontSize.body.lineHeight,
        color: 'white',
        alignSelf: 'center',
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
})