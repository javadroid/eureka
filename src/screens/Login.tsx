import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import CustomPageCointainer from '../components/customComponnents/CustomPageContainer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/customComponnents/CustomHeaderButton';
import CustomInputText from '../components/customComponnents/CustomInputText';
import CustomButtonSubmit from '../components/customComponnents/CustomButtonSubmit';
import fontSize from '../constants/fontSize';
import CustomKeyboardAvoidingView from '../components/customComponnents/CustomKeyboardAvoidingView';
import CustomHeader from '../components/customComponnents/CustomHeader';
import FormActions from '../utils/actions/FormActions';
import { formReducer } from '../utils/reducers/FormReducers';
import { addStudent, login, profile } from '../utils/service/ApiService';
import { AxiosError } from 'axios';
import setlocalRedux from '../utils/localRedux';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticated, setUserToken } from '../utils/store/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { async } from 'validate.js';
import colors from '../constants/colors';


const initialState = {

    inputValue: {

        matricNo: "",

        password: "",


    },
    inputValidities: {
        matricNo: false,
        password: false,
    },
    formValid: false
}
export default function Login({  }) {
    const dispatch = useDispatch()
    const [formState, dispatchFormState] = useReducer(formReducer, initialState)
    const [matricNo, setmatric] = useState('');
    const [password, setPassword] = useState('');
    const [errorMatric, setErrorMatric] = useState<null | string>(null);
    const [errorPassword, setErrorPassword] = useState<null | string>(null);
    const [loading, setLoading] = useState(false);

    const userToken= useSelector((state:any)=> state.user.userToken)
    const isAuthenticated= useSelector((state:any)=> state.user.isAuthenticated)

    useEffect(() => {
            if (userToken) {
                // navigation.navigate("Home")
                // console.log(isAuthenticated)
            }
        }, [userToken])

       
    const onChangeTextHandler = useCallback((inputId: any, inputValue: any) => {
        const result = (FormActions(inputId, inputValue))
        dispatchFormState({ inputId, validationResult: result, inputValue })
    }, [dispatchFormState])

    const HandleSubmit = useCallback(async (data) => {
        setLoading(true)
        // console.log(data)
        setErrorMatric("")
        setErrorPassword("")
        const result = await login('students', data)
            .catch((err: AxiosError) => {
                if(err.response?.data['error']==="Not Found"){
                    setErrorMatric("Matric Number Not Found")
                    setLoading(false)
                }else if(err.response?.data['error']==="Unauthorized"){
                    setErrorPassword("Wrong Password")
                    setLoading(false)
                }else{
                    setErrorPassword("Something went wrong")
                    setLoading(false)
                }
            });
         console.log("login user id",result)
      if(result){
         setlocalRedux({key:"userToken",data:result,dispatch,method:setUserToken})
         setlocalRedux({key:"isAuthenticated",data:true,dispatch,method:setIsAuthenticated})
         setLoading(false)
        // navigation.navigate("Home")
      }
       
    },[])
    return (

        <CustomKeyboardAvoidingView>
            <CustomPageCointainer edgeTop={'top'} style={{ flex: 1 }}>
                <View >
                    <CustomHeader label='Login' />
                </View>
                <View style={styles.container}>
                    <View style={styles.loginContainer} >

                        <CustomInputText 
                        id='matricNo' 
                        errorText={formState.inputValidities['matricNo'] || errorMatric} 
                        initialValue={formState.inputValue['matricNo']} 
                        onChangeText={onChangeTextHandler} 
                        style={{ marginBottom: 30 }} 
                        label='Matric Number' 
                        />

                        <CustomInputText 
                        id='password' 
                        errorText={formState.inputValidities['password'] || errorPassword} 
                        initialValue={formState.inputValue['password']} 
                        onChangeText={onChangeTextHandler} 
                        style={{ marginBottom: 30 }} 
                        label='Password' 
                        placeholder='******' 
                        password={true} 
                        />

                        <View style={{ marginBottom: 10 }}>
                            <Text>Forgot Password </Text>
                        </View>

                        <CustomButtonSubmit 
                        onPress={() => {
                            loading
                            ?
                            {}
                            :
                            HandleSubmit(formState.inputValue)
                        }} 
                        disabled={!formState.formValid} 
                        style={{ marginBottom: 30 }} 
                        lable={ loading ? 'Loading' : 'Login' } 
                        />
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ alignItems: 'center', }}>
                            <Text>Don't have an account? Sign up😎 </Text>
                        </TouchableOpacity> */}
                    </View>
                </View>


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
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        width: '100%',
        padding: 20,
    },
});