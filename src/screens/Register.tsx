import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal } from 'react-native'
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
        faculty: "",
        department: ""
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
        faculty: false,
        department: false
    },
    formValid: false
}

export default function Register({ }) {
    const [formState, dispatchFormState] = useReducer(formReducer, initialState)
    
    const [loading, setLoading] = useState(false);

    const pickerGenderRef = useRef<any>(null);
    const pickerFacultyRef = useRef<any>(null);
    const pickerDepartmentRef = useRef<any>(null);

    const onChangeTextHandler = useCallback((inputId: any, inputValue: any) => {
        const result = (FormActions(inputId, inputValue))
        console.log(result, inputId)
        dispatchFormState({ inputId, validationResult: result, inputValue })
    }, [dispatchFormState])
    return (
        <CustomKeyboardAvoidingView>
            <CustomPageCointainer edgeTop={'top'} style={{ flex: 1 }}>
                <View >
                    <CustomHeader label='Register' />
                </View>
                <ScrollView style={{}}>
                    <View style={styles.registerContainer} >
                        <CustomInputText errorText={formState.inputValidities['matric']} initialValue={formState.inputValue['matric']} onChangeText={onChangeTextHandler} style={{ marginBottom: 0 }} id='matric' label='Matric Number' />
                        <CustomInputText errorText={formState.inputValidities['fullname']} initialValue={formState.inputValue['fullname']} onChangeText={onChangeTextHandler} style={{ marginBottom: 0, }} textContentType='name' id='fullname' label='Full Name' />
                        <CustomInputText errorText={formState.inputValidities['username']} initialValue={formState.inputValue['username']} onChangeText={onChangeTextHandler} style={{ marginBottom: 0 }} textContentType={'username'} id='username' label='Username' />
                        <CustomInputText errorText={formState.inputValidities['email']} initialValue={formState.inputValue['email']} onChangeText={onChangeTextHandler} style={{ marginBottom: 0 }} textContentType='emailAddress' keyboardType={'email-address'} id='email' label='Email' />
                        <CustomInputText errorText={formState.inputValidities['phone']} initialValue={formState.inputValue['phone']} onChangeText={onChangeTextHandler} style={{ marginBottom: 0 }} textContentType={'telephoneNumber'} keyboardType={'phone-pad'} id='phone' label='Phone Number' />
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <CustomInputText errorText={formState.inputValidities['dob']} initialValue={formState.inputValue['dob']} onChangeText={onChangeTextHandler} onPress={true} editable={false} id='dob' style={{ marginBottom: 0, }} label='Date of Birth' />
                            <CustomInputText errorText={formState.inputValidities['gender']} initialValue={formState.inputValue['gender']} onChangeText={onChangeTextHandler} items={['d', 'ds']} editable={false} pickerRef={pickerGenderRef} id='gender' style={{ marginBottom: 0 }} label='Gender' />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <CustomInputText items={["f"]} errorText={formState.inputValidities['faculty']} initialValue={formState.inputValue['faculty']} onChangeText={onChangeTextHandler} editable={false} pickerRef={pickerFacultyRef} style={{ marginBottom: 0, }} id='faculty' label='Faculty' />
                            <CustomInputText items={["f"]} errorText={formState.inputValidities['department']} initialValue={formState.inputValue['department']} onChangeText={onChangeTextHandler} editable={false} pickerRef={pickerDepartmentRef} id='department' style={{ marginBottom: 0 }} label='Department' />
                        </View>
                        <CustomInputText errorText={formState.inputValidities['password']} initialValue={formState.inputValue['password']} onChangeText={onChangeTextHandler} id='password' style={{ marginBottom: 20 }} textContentType={'password'} label='Password' placeholder='******' password={true} />
                    </View>
                </ScrollView>
                <CustomButtonSubmit disabled={!formState.formValid} style={{ marginBottom: 20 }} lable='Register' />
            </CustomPageCointainer>
        </CustomKeyboardAvoidingView>
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
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    registerContainer: {
        // width: '100%',
    },
});