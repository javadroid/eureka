import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Alert, Keyboard } from 'react-native'
import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import CustomPageCointainer from '../components/customComponnents/CustomPageContainer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/customComponnents/CustomHeaderButton';
import CustomInputText from '../components/customComponnents/CustomInputText';
import CustomButtonSubmit from '../components/customComponnents/CustomButtonSubmit';
import fontSize from '../constants/fontSize';
import CustomKeyboardAvoidingView from '../components/customComponnents/CustomKeyboardAvoidingView';
import CustomHeader from '../components/customComponnents/CustomHeader';
import { ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CustomPicker from '../components/customComponnents/CustomPicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import FormActions from '../utils/actions/FormActions';
import { formReducer } from '../utils/reducers/FormReducers';
import { addStudent } from '../utils/service/ApiService';
import { AxiosError } from 'axios';
import setlocalRedux from '../utils/localRedux';
import { setUserToken, setIsAuthenticated } from '../utils/store/userSlice';
import CustomPaperInputText from '../components/customComponnents/CustomPaperInputText';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../constants/colors';
import CustomPaperModal from '../components/customComponnents/CustomPaperModal';
const initialState = {
    inputValue: {
        fullname: "",
        username: "",
        matric: "",
        gender: "",
        phone: "",
        dob: "",
        email: "",
        password: "",
        // faculty: "",
        // department: "",
        // level: ""

    },
    inputValidities: {
        fullname: false,
        username: false,
        matric: false,
        gender: false,
        phone: false,
        dob: false,
        email: false,
        password: false,
        // faculty: false,
        // department: false,
        // level: false
    },
    formValid: false
}

export default function Register({ navigation }) {
    const [formState, dispatchFormState] = useReducer(formReducer, initialState)

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const [page, setPage] = useState(1)
    const pickerGenderRef = useRef<any>(null);
    const pickerFacultyRef = useRef<any>(null);
    const pickerLevelRef = useRef<any>(null);
    const pickerDepartmentRef = useRef<any>(null);
    const [active, setactive] = useState(false)

    const onChangeTextHandler = useCallback((inputId: any, inputValue: any) => {
        const result = (FormActions(inputId, inputValue))
        // console.log(result, inputId)
        dispatchFormState({ inputId, validationResult: result, inputValue })
        // console.log(formState.inputValue)
    }, [dispatchFormState, formState])

    const HandleSubmit = useCallback(async (data) => {

        const result = await addStudent('students', data)
            .catch((err: AxiosError) => {
                // console.log(err.response?.data)
                Alert.alert('Error', err.message)
            });
        // console.log(result)
        if (result) {
            Alert.alert('Success', 'please wait for confirmation')
            navigation.navigate("Login")
        }

    }, [dispatchFormState])

    const closePicker = () => {
        setactive(false)
      }
      const openPicker = () => {
        console.log(active)
        Keyboard.dismiss()
        setactive(true)
       
      }
    return (
        <CustomKeyboardAvoidingView>
            <CustomPageCointainer edgeTop={'top'} style={{ flex: 1 }}>
            {active && (
       <CustomPaperModal closePicker={closePicker}>
        <Text>sdfs</Text>
       </CustomPaperModal>

      )}
                <View style={styles.container}>
                    <Text style={{
                        ...styles.font,
                        fontFamily: "bold",
                        fontSize: fontSize.bodyLarge.fontSize,
                        lineHeight: fontSize.bodyLarge.lineHeight,
                        letterSpacing: 0.3,
                    }} >SIGN UP</Text>
                    <View style={styles.registerContainer} >
                        {
                            page === 1 ? (
                                <>
                                    <CustomPaperInputText
                                        errorText={formState.inputValidities['fullname']}
                                        initialValue={formState.inputValue['fullname']}
                                        onChangeText={onChangeTextHandler}
                                        styleContainer={{ marginBottom: 20 }}
                                        textContentType='name'
                                        id='fullname'
                                        label='Full Name'
                                        value={formState.inputValue['fullname']}
                                        iconColor={colors.grey45}
                                        textColor={colors.grey5} />

                                    <CustomPaperInputText
                                        errorText={formState.inputValidities['username']}
                                        initialValue={formState.inputValue['username']}
                                        onChangeText={onChangeTextHandler}
                                        value={formState.inputValue['username']}
                                        textContentType={'username'}
                                        id='username' label='Username'
                                        styleContainer={{ marginBottom: 20 }}
                                        iconColor={colors.grey45}
                                        textColor={colors.grey5} />


                                    <CustomPaperInputText
                                        errorText={formState.inputValidities['dob']}
                                        initialValue={formState.inputValue['dob']}
                                        onChangeText={onChangeTextHandler} onPress={true}
                                        styleContainer={{ marginBottom: 20 }} editable={false}
                                        id='dob'
                                        value={new Date(formState.inputValue['dob']).toDateString()}
                                        label='Date of Birth'
                                        iconColor={colors.grey45}
                                        textColor={colors.grey5} />
                                    <CustomPaperInputText
                                        errorText={formState.inputValidities['gender']}
                                        initialValue={formState.inputValue['gender']}
                                        onChangeText={onChangeTextHandler}
                                        items={['d', 'ds']} editable={false}
                                        pickerRef={pickerGenderRef}
                                        id='gender'
                                        openPicker={openPicker}
                                       label='Gender'
                                        iconColor={colors.grey45}
                                        textColor={colors.grey5} />
                                </>
                            ) : (
                                <>
                                    <CustomPaperInputText
                                        errorText={formState.inputValidities['matric']}
                                        initialValue={formState.inputValue['matric']}
                                        onChangeText={onChangeTextHandler}
                                        styleContainer={{ marginBottom: 20 }}
                                        id='matric'
                                        value={formState.inputValue['matric']}
                                        label='Matric Number'
                                        iconColor={colors.grey45}
                                        textColor={colors.grey5}
                                    />
                                    <CustomPaperInputText
                                        errorText={formState.inputValidities['email']}
                                        initialValue={formState.inputValue['email']}
                                        onChangeText={onChangeTextHandler}
                                        styleContainer={{ marginBottom: 20 }}
                                        textContentType='emailAddress'
                                        keyboardType={'email-address'}
                                        id='email' label='Email'
                                        value={formState.inputValue['email']}
                                        iconColor={colors.grey45}
                                        textColor={colors.grey5} />
                                    <CustomPaperInputText
                                        errorText={formState.inputValidities['phone']}
                                        initialValue={formState.inputValue['phone']}
                                        onChangeText={onChangeTextHandler}
                                        styleContainer={{ marginBottom: 20 }}
                                        textContentType={'telephoneNumber'}
                                        keyboardType={'phone-pad'} id='phone'
                                        label='Phone Number' 
                                        value={formState.inputValue['phone']}
                                        iconColor={colors.grey45}
                                        textColor={colors.grey5}/>
                                    <CustomPaperInputText
                                        errorText={formState.inputValidities['password']}
                                        initialValue={formState.inputValue['password']}
                                        onChangeText={onChangeTextHandler} id='password'
                                         textContentType={'password'}

                                        label='Password' placeholder='******' password={true} 
                                        iconColor={colors.grey45}
                                       value={formState.inputValue['password']}
                                        textColor={colors.grey5}/>

                                </>
                            )
                        }



                        {/* <CustomPaperInputText items={["f", "dd", "dd"]} styleContainer={{ width: '50%' }} errorText={formState.inputValidities['level']} initialValue={formState.inputValue['level']} onChangeText={onChangeTextHandler} editable={false} pickerRef={pickerLevelRef} id='level' styleContainer={{ marginBottom: 20 }} label='Level' />
                    <View style={{ display: 'flex', flexDirection: 'row', }}>
                        <CustomPaperInputText items={["f", "dd"]} styleContainer={{ width: '50%' }} errorText={formState.inputValidities['faculty']} initialValue={formState.inputValue['faculty']} onChangeText={onChangeTextHandler} editable={false} pickerRef={pickerFacultyRef} style={{ marginBottom: 0, }} id='faculty' label='Faculty' />
                        <CustomPaperInputText items={["f", "dd"]} styleContainer={{ width: '50%' }} errorText={formState.inputValidities['department']} initialValue={formState.inputValue['department']} onChangeText={onChangeTextHandler} editable={false} pickerRef={pickerDepartmentRef} id='department' styleContainer={{ marginBottom: 20 }} label='Department' />
                    </View>  */}

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <TouchableOpacity onPress={() => setPage(1)} style={{ marginVertical: 10 }}>
                                <FontAwesome name="angle-left" size={24} color={page !== 1 ? colors.grey45 : "black"} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setPage(2)} style={{ marginVertical: 10 }}>
                                <FontAwesome name="angle-right" size={24} color={page !== 2 ? colors.grey45 : "black"} />
                            </TouchableOpacity>
                        </View>

                        <CustomButtonSubmit
                            onPress={() => {
                                page === 1 ? setPage(2) :
                                    loading ? {} :
                                        HandleSubmit(formState.inputValue)
                            }}
                            disabled={page === 2 ? !formState.formValid : false}
                            style={{ width: "70%", }}
                            loading={loading}
                            lable={page === 1 ? "Next" : 'Register'}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginVertical: 10 }}>
                            <Text style={{ ...styles.font, }} >You already have an account? Login </Text>
                        </TouchableOpacity>
                    </View>

                </View>



            </CustomPageCointainer>
        </CustomKeyboardAvoidingView>

        // <CustomPaperModal/>
    )
}
const styles = StyleSheet.create({
    headerTitle: {
        marginTop: 20,
        fontFamily: 'bold',
        fontSize: fontSize.title.fontSize,
        lineHeight: fontSize.title.lineHeight,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position:"relative"
    },
    registerContainer: {
        width: '100%',
        padding: 20,
        position:"relative"
    }, font: {
        fontSize: 12,
        fontFamily: "regular",
        color: colors.grey45
    }

});