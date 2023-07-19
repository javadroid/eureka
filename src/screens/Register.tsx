import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Alert } from 'react-native'
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

const initialState = {
    inputValue: {
        fullname: "",
        username: "",
        matricNo: "",
        gender: "",
        phoneNo: "",
        dob: "",
        email: "",
        password: "",
        faculty: "",
        department: "",
        level:""
 
    },
    inputValidities: {
        fullname: false,
        username: false,
        matricNo: false,
        gender: false,
        phoneNo: false,
        dob: false,
        email: false,
        password: false,
        faculty: false,
        department: false,
        level:false
    },
    formValid: false
}

export default function Register({navigation }) {
    const [formState, dispatchFormState] = useReducer(formReducer, initialState)
    
    const [loading, setLoading] = useState(false);
const [error,setError]=useState('')
    const pickerGenderRef = useRef<any>(null);
    const pickerFacultyRef = useRef<any>(null);
    const pickerLevelRef = useRef<any>(null);
    const pickerDepartmentRef = useRef<any>(null);

    const onChangeTextHandler = useCallback((inputId: any, inputValue: any) => {
        const result = (FormActions(inputId, inputValue))
        // console.log(result, inputId)
        dispatchFormState({ inputId, validationResult: result, inputValue })
        // console.log(formState.inputValue)
    }, [dispatchFormState,formState])

    const HandleSubmit = useCallback(async (data) => {
   
        const result = await addStudent('students', data)
            .catch((err: AxiosError) => {
             // console.log(err.response?.data)
                Alert.alert('Error', err.message)
            });
            // console.log(result)
      if(result){
        Alert.alert('Success', 'please wait for confirmation')
        navigation.navigate("Login")
      }
       
    },[dispatchFormState])
    return (
        <CustomKeyboardAvoidingView>
            <CustomPageCointainer edgeTop={'top'} style={{ flex: 1 }}>
                
                    <CustomHeader style={styles.headerTitle} label=' ' />
               
                <ScrollView style={{}}>
                    <View style={styles.registerContainer} >
                        <CustomInputText errorText={formState.inputValidities['matricNo']} initialValue={formState.inputValue['matricNo']} onChangeText={onChangeTextHandler} style={{ marginBottom: 0 }} id='matricNo' label='Matric Number' />
                        <CustomInputText errorText={formState.inputValidities['fullname']} initialValue={formState.inputValue['fullname']} onChangeText={onChangeTextHandler} style={{ marginBottom: 0, }} textContentType='name' id='fullname' label='Full Name' />
                        <CustomInputText errorText={formState.inputValidities['username']} initialValue={formState.inputValue['username']} onChangeText={onChangeTextHandler} style={{ marginBottom: 0 }} textContentType={'username'} id='username' label='Username' />
                        <CustomInputText errorText={formState.inputValidities['email']} initialValue={formState.inputValue['email']} onChangeText={onChangeTextHandler} style={{ marginBottom: 0 }} textContentType='emailAddress' keyboardType={'email-address'} id='email' label='Email' />
                        <CustomInputText errorText={formState.inputValidities['phoneNo']} initialValue={formState.inputValue['phoneNo']} onChangeText={onChangeTextHandler} style={{ marginBottom: 0 }} textContentType={'telephoneNumber'} keyboardType={'phone-pad'} id='phoneNo' label='Phone Number' />
                       
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                            <CustomInputText errorText={formState.inputValidities['dob']} initialValue={formState.inputValue['dob']} onChangeText={onChangeTextHandler} onPress={true} styleContainer={{width:'50%'}}  editable={false} id='dob' style={{ marginBottom: 0, }} label='Date of Birth' />
                            <CustomInputText errorText={formState.inputValidities['gender']} initialValue={formState.inputValue['gender']} onChangeText={onChangeTextHandler} items={['d', 'ds']} editable={false} pickerRef={pickerGenderRef} id='gender' style={{ marginBottom: 0 }} label='Gender' />
                        </View>
                        <CustomInputText items={["f","dd","dd"]} styleContainer={{ width: '50%' }} errorText={formState.inputValidities['level']} initialValue={formState.inputValue['level']} onChangeText={onChangeTextHandler} editable={false} pickerRef={pickerLevelRef} id='level' style={{ marginBottom: 0 }} label='Level' />
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <CustomInputText items={["f","dd"]} styleContainer={{ width: '50%' }} errorText={formState.inputValidities['faculty']} initialValue={formState.inputValue['faculty']} onChangeText={onChangeTextHandler} editable={false} pickerRef={pickerFacultyRef} style={{ marginBottom: 0, }} id='faculty' label='Faculty' />
                            <CustomInputText items={["f","dd"]} styleContainer={{ width: '50%' }} errorText={formState.inputValidities['department']} initialValue={formState.inputValue['department']} onChangeText={onChangeTextHandler} editable={false} pickerRef={pickerDepartmentRef} id='department' style={{ marginBottom: 0 }} label='Department' />
                        </View>
                        <CustomInputText errorText={formState.inputValidities['password']} initialValue={formState.inputValue['password']} onChangeText={onChangeTextHandler} id='password' style={{ marginBottom: 20 }} textContentType={'password'} label='Password' placeholder='******' password={true} />
                    </View>
                </ScrollView>
                <CustomButtonSubmit onPress={()=>HandleSubmit(formState.inputValue)} disabled={!formState.formValid} style={{ marginBottom: 20 }} lable='Register' />
            </CustomPageCointainer>
        </CustomKeyboardAvoidingView>
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
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    registerContainer: {
        // width: '100%',
    },
});