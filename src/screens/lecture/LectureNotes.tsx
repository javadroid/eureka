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

const notes=[{
    id:1,title:`INTRODUCTION TO SOFTWARE ENGINEERING`,note:`<p>The term <strong><em>software engineering</em></strong> is composed of two words, software and engineering.</p>
    <p><br><strong>Software </strong>is more than just a program code. A program is an executable code, which serves some<br>computational purpose. Software is considered to be a collection of executable programming code,<br>associated libraries and documentations. Software, when made for a specific requirement is called<br><strong>software product.</strong></p>
    <p><br><strong>Engineering </strong>on the other hand, is all about developing products, using well-defined, scientific<br>principles and methods.<br>So, we can define<strong> software engineering</strong> as an engineering branch associated with the<br>development of software product using well-defined scientific principles, methods and procedures. It<br>is an engineering discipline that is concerned with all aspects of software production from the early<br>stages of system specification through to maintaining the system after it has gone into use. It is<br>an engineering discipline because it uses appropriate theories and methods to solve problems bearing<br>in mind organizational and financial constraints. Software engineering focuses on all aspects of<br>software production and not just on the technical process of development; it includes project<br>management and the development of tools, methods etc. to support software production.<br>The outcome of software engineering is an efficient and reliable software product.</p>
    <p><br>IEEE defines software engineering as:</p>
    <p><em>The application of a systematic, disciplined, quantifiable approach to the development, operation and</em><br><em>maintenance of software.</em></p>
    <p><br>It is usually cheaper, in the long run, to use software engineering methods and techniques for<br>software systems rather than just write the programs as if it was a personal programming project.<br>For most types of system, the majority of costs are the costs of changing the software after it has<br>gone into use.</p>
    <p><br>Any software process includes four types of activities:</p>
    <ul>
    <li>Software <strong>specification</strong>, where customers and engineers define the software that is to<br>be produced and the constraints on its operation.</li>
    <li>Software <strong>development</strong>, where the software is designed and programmed.</li>
    <li>Software <strong>validation</strong>, where the software is checked to ensure that it is what the<br>customer requires.</li>
    <li>Software <strong>evolution</strong>, where the software is modified to reflect changing customer and<br>market requirements.</li>
    </ul>
    <p><br><strong><span style="text-decoration: underline;">FAQ about software engineering</span></strong></p>
    <p><br><strong>What are the fundamental software engineering activities?</strong></p>
    <p style="padding-left: 40px;">Software specification, software development, software validation and software evolution.</p>
    <p><br><strong>What is the difference between software engineering and computer science?</strong></p>
    <p style="padding-left: 40px;">Computer science focuses on theory and fundamentals; software engineering is concerned<br>with the practicalities of developing and delivering useful software.</p>
    <p><br><strong>What is the difference between software engineering and system engineering?</strong></p>
    <p style="padding-left: 40px;">System engineering is concerned with all aspects of computer-based systems development<br>including hardware, software and process engineering. Software engineering is part of this<br>more general process.</p>
    <p><br><strong>What are the key challenges facing software engineering?</strong></p>
    <p style="padding-left: 40px;">Coping with increasing diversity, demands for reduced delivery times and developing<br>trustworthy software.</p>
    <p>&nbsp;</p>`
}]

export default function LectureNotes({ navigation }) {
    const { width } = useWindowDimensions();
    const [descHTML, setDescHTML] = useState('');
    const [modalVisible, setModalVisible] = useState(false)
    const [content,setContent]=useState(0)
  

    const   HandleSwipeLeft=(state:any)=>{
           
        if(content >0){
            setContent(content-1)
            console.log(content)
        }
        
    }
    const   HandleSwipeRight=(state:any)=>{
        // console.log(content,' ', questions.length)
        if(content<notes.length-1){
            setContent(content+1)
         
        }
        
    }
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
                <HeaderMenu  navigation={navigation} headerTitle='CSC 419' />
                <CustomHeader style={{ ...styles.headerTitle, ...{} }} label={notes[content].title} />
                {/* <View style={styles.questionHeader}>
                    <Text style={styles.questionHeaderText}>20</Text>
                </View> */}

        
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
                                            html: notes[content].note
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
        marginBottom: 10,
        fontFamily: 'regular',
        fontSize: fontSize.bodySmall.fontSize,
        lineHeight: fontSize.bodySmall.lineHeight,
        color: colors.textColor,
        alignSelf: 'center',
        textAlign:'center'
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