import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CustomPageCointainer from '../components/customComponnents/CustomPageContainer'
import CustomKeyboardAvoidingView from '../components/customComponnents/CustomKeyboardAvoidingView'
import fontSize from '../constants/fontSize'

import { Divider, TextInput } from 'react-native-paper'
import colors from '../constants/colors'
import CustomButtonSubmit from '../components/customComponnents/CustomButtonSubmit'
import { Clipboard } from 'react-native'
import CustomText from '../components/customComponnents/CustomText'

export default function VerificationCode() {
    let [first, setfirst] = useState("")
    let [sec, setsec] = useState("")
    let [third, setthird] = useState("")
    let [fourth, setfourth] = useState("")
    let [err, seterr] = useState(false)
    let Ref1 = useRef();
    const Ref2 = useRef();
    const Ref3 = useRef();
    const Ref4 = useRef();
    useEffect(() => {
     
    }, [])
    
    return (
        <>

            <CustomPageCointainer edgeTop={'top'} style={{ flex: 1 }}>
                <View style={styles.container}>
              
                    <CustomText text='Enter code sent to your email' fontFamily='bold' fontsize={fontSize.body} style={{paddingLeft:20}}/>
                    <View style={styles.inputContain}>
                        <TextInput error={err}
                            activeUnderlineColor={colors.button1}
                            maxLength={1}
                            inputMode='numeric'
                            ref={Ref1}
                            underlineColor='transparent'
                            
                            onChangeText={async(e) => {
                                setfirst(e)

                               
                               
                              const content = await  Clipboard.getString()
                               const isPasted = content.charAt(0)===(e);
                               console.log({isPasted,content})
                                    if(isPasted&&content.length>0)
                                    { 
                                        console.log(e,content.charAt(0),content.charAt(1))
                                        setfirst(content.charAt(0))
                                        setsec(content.charAt(1))
                                        setthird(content.charAt(2))
                                        setfourth(content.charAt(3))
                                        Ref4?.current?.focus();
                                        Clipboard.setString("")
                                    }else{
                                        setfirst(e)
                                        e.length === 0 ? Ref1?.current?.focus() : Ref2?.current?.focus();
                                    }        
                            }} value={first}
                            contentStyle={styles.contentStyle}
                            style={styles.input}
                            keyboardType='number-pad' />

                        <TextInput
                            error={err}
                            activeUnderlineColor={colors.button1}
                            maxLength={1}
                            inputMode='numeric'
                            ref={Ref2}
                            underlineColor='transparent'
                            onChangeText={(e) => {
                                setsec(e)
                                e.length === 0 ? Ref1?.current?.focus() : Ref3?.current?.focus();
                            }}
                            value={sec}
                            contentStyle={styles.contentStyle}
                            style={styles.input}
                            keyboardType='number-pad' />

                        <TextInput
                            error={err}
                            activeUnderlineColor={colors.button1}
                            maxLength={1} inputMode='numeric'
                            ref={Ref3}
                            underlineColor='transparent'
                            onChangeText={(e) => {
                                setthird(e)
                                e.length === 0 ? Ref2?.current?.focus() : Ref4?.current?.focus();
                            }}
                            value={third} contentStyle={styles.contentStyle}
                            style={styles.input}
                            keyboardType='number-pad' />

                        <TextInput
                            error={err}
                            activeUnderlineColor={colors.button1}
                            maxLength={1}

                           underlineColor='transparent'
                            inputMode='numeric' ref={Ref4}
                            onChangeText={(e) => {
                                setfourth(e)
                                e.length === 0 ? Ref3?.current?.focus() : Ref4?.current?.focus();
                            }}
                            value={fourth}
                            contentStyle={styles.contentStyle}
                            style={styles.input}
                            keyboardType='number-pad' />

                    </View>
                    
                    <CustomText text='Resend OTP' color={colors.grey3} fontFamily='bold' fontsize={fontSize.bodySmall} style={{paddingLeft:20,paddingTop:20}}/>
                    <CustomButtonSubmit lable='Verify' onPress={()=>console.log(first+""+sec+""+third+""+fourth)}/>
                </View>

            </CustomPageCointainer>
        </ >


    )
}

const styles = StyleSheet.create({
    headerTitle: {
        marginTop: 38,
        fontFamily: 'bold',
        fontSize: fontSize.header3.fontSize,
        lineHeight: fontSize.header3.lineHeight,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        
        // alignItems: 'center',
    },
    inputContain: {
        display: "flex",
        flexDirection: "row",
        width: "80%",
        paddingTop:5,
        alignSelf:"center",
        justifyContent: "space-evenly",

    },
    contentStyle:{},
    input: {
        borderRadius: 10,
        marginTop:5,
        height: 46,
        fontFamily:"bold",
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        
        textAlign:"center",
        
        // paddingHorizontal:5
    },
    font: {
        fontSize: 12,
        fontFamily: "regular",
        color: colors.grey45
    }
});