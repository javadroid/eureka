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
import { DrawerComponent } from './DrawerComponent'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const  questions=[
    {no:'1a',question:`<p dir="ltr" style="line-height: 2;" role="presentation">There are different perspectives from which you may develop various abstract models to represent the would-be system. Briefly discuss these four (4) perspectives and for each, mention the graphical notation associated with it. <strong>[8 Marks]&nbsp;</strong></p>
    <p>&nbsp;</p>`},
    {no:'1b',question:`<p dir="ltr" style="line-height: 2;" role="presentation">Draw a state diagram of the control software for an automatic washing machine that has different programs for different types of clothes. <strong>[9½ Marks]&nbsp;</strong></p>
    <p>&nbsp;</p>`},
    {no:'2a',question:`<p dir="ltr" style="line-height: 2;" role="presentation">Software architectural design is an important stage in the software development process; explicitly discuss three (3) benefits of providing a detailed design and documentation at this stage. <strong>[6 Marks]&nbsp;</strong></p>
    <p>&nbsp;</p>`},
    {no:'2b',question:`<p dir="ltr" style="line-height: 2;" role="presentation">There are different perspectives from which you may develop various abstract models to represent the would-be system. Briefly discuss these four (4) perspectives and for each, mention the graphical notation associated with it. <strong>[8 Marks]&nbsp;</strong></p>
    <p>&nbsp;</p>`},
    {no:'3a',question:`<p dir="ltr" style="line-height: 2;" role="presentation">Draw a state diagram of the control software for an automatic washing machine that has different programs for different types of clothes. <strong>[9½ Marks]&nbsp;</strong></p>
    <p>&nbsp;</p>`},
    {no:'3b',question:`<p dir="ltr" style="line-height: 2;" role="presentation">Software architectural design is an important stage in the software development process; explicitly discuss three (3) benefits of providing a detailed design and documentation at this stage. <strong>[6 Marks]&nbsp;</strong></p>
    <p>&nbsp;</p>`},
    {no:'2a',question:`<p dir="ltr" style="line-height: 2;" role="presentation">Software architectural design is an important stage in the software development process; explicitly discuss three (3) benefits of providing a detailed design and documentation at this stage. <strong>[6 Marks]&nbsp;</strong></p>
    <p>&nbsp;</p>`},
    {no:'2b',question:`<p dir="ltr" style="line-height: 2;" role="presentation">There are different perspectives from which you may develop various abstract models to represent the would-be system. Briefly discuss these four (4) perspectives and for each, mention the graphical notation associated with it. <strong>[8 Marks]&nbsp;</strong></p>
    <p>&nbsp;</p>`},
    {no:'3a',question:`<p dir="ltr" style="line-height: 2;" role="presentation">Draw a state diagram of the control software for an automatic washing machine that has different programs for different types of clothes. <strong>[9½ Marks]&nbsp;</strong></p>
    <p>&nbsp;</p>`},
    {no:'3b',question:`<p dir="ltr" style="line-height: 2;" role="presentation">Software architectural design is an important stage in the software development process; explicitly discuss three (3) benefits of providing a detailed design and documentation at this stage. <strong>[6 Marks]&nbsp;</strong></p>
    <p>&nbsp;</p>`}
]
export default function Questions({ navigation }) {
    const { width } = useWindowDimensions();
    const [content,setContent]=useState(0)
    const [descHTML, setDescHTML] = useState(questions[content]?.question);
    const [modalVisible, setModalVisible] = useState(false)
    const[answerVisible, setAnswerVisible]=useState(false)
    const [zIndex, setzIndex] = useState(false)
    
    const displayAnswer = () => {
        setAnswerVisible(!answerVisible)
    }
    const floatingButtonItem=[
        {IconPack:Feather,iconName:answerVisible?'eye':'eye-off',color:'white',size:24,onPress:displayAnswer},
        {IconPack:MaterialIcons,iconName:'feedback',color:'white',size:24,onPress:displayAnswer},
        ]
       const  HandleGoto=() => {
        setzIndex(!zIndex)
        }

        const   HandleSwipeLeft=(state:any)=>{
           
            if(content >0){
                setContent(content-1)
                console.log(content)
            }
            
        }
        const   HandleSwipeRight=(state:any)=>{
            // console.log(content,' ', questions.length)
            if(content<questions.length-1){
                setContent(content+1)
             
            }
            
        }

    return (
        <>
            <StickyButton onPress={HandleGoto} />
            <FloatingButton item={floatingButtonItem} />
            <DrawerComponent setContent={setContent} listNumber={questions} zIndex={zIndex} setzIndex={setzIndex} />
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
                    <Text style={styles.questionHeaderText}>{questions[content]?.no}</Text>
                </View>

        
                    <GestureRecognizer style={{flex:1, flexDirection:'row',}}
                        onSwipeLeft={(state) => HandleSwipeRight(state)}
                        onSwipeRight={(state) => HandleSwipeLeft(state)}
                    >
                        <View style={styles.displayContainer}>
                            <View style={styles.htmlBoxStyle}>
                                <ScrollView>
                                    <RenderHtml
                                        contentWidth={width}
                                        source={{
                                            html: questions[content]?.question
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