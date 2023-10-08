import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useCallback, useReducer, useState } from 'react'
import CustomPageCointainer from '../components/customComponnents/CustomPageContainer';
import CustomButtonSubmit from '../components/customComponnents/CustomButtonSubmit';
import fontSize from '../constants/fontSize';
import CustomKeyboardAvoidingView from '../components/customComponnents/CustomKeyboardAvoidingView';
import FormActions from '../utils/actions/FormActions';
import { formReducer } from '../utils/reducers/FormReducers';
import { login } from '../utils/service/ApiService';
import { AxiosError } from 'axios';
import setlocalRedux from '../utils/localRedux';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated, setUserToken } from '../utils/store/userSlice';
import colors from '../constants/colors';
import CustomPaperInputText from '../components/customComponnents/CustomPaperInputText';
import { FontAwesome } from '@expo/vector-icons';
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
export default function Login({ navigation }) {
    const dispatch = useDispatch()
    const [formState, dispatchFormState] = useReducer(formReducer, initialState)
    const [errorMatric, setErrorMatric] = useState<null | string>(null);
    const [errorPassword, setErrorPassword] = useState<null | string>(null);
    const [loading, setLoading] = useState(false);
  
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
                if (err.response?.data['error'] === "Not Found") {
                    setErrorMatric("Matric Number Not Found")
                    setLoading(false)
                } else if (err.response?.data['error'] === "Unauthorized") {
                    setErrorPassword("Wrong Password")
                    setLoading(false)
                } else {
                    setErrorPassword("Something went wrong")
                    setLoading(false)
                }
            });
        console.log("login user id", result)
        if (result) {
            setlocalRedux({ key: "userToken", data: result, dispatch, method: setUserToken })
            setlocalRedux({ key: "isAuthenticated", data: true, dispatch, method: setIsAuthenticated })
            setLoading(false)
            // navigation.navigate("Home")
        }
    }, [])
    return (
        <CustomKeyboardAvoidingView>
            <CustomPageCointainer edgeTop={'top'} style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={{
                        ...styles.font,
                        fontFamily: "bold",
                        fontSize: fontSize.bodyLarge.fontSize,
                        lineHeight: fontSize.bodyLarge.lineHeight,
                        letterSpacing: 0.3,
                    }} >SIGN IN</Text>
                    <View style={styles.loginContainer} >
                        <CustomPaperInputText
                            id='matricNo'
                            errorText={formState.inputValidities['matricNo'] || errorMatric}
                            initialValue={formState.inputValue['matricNo']}
                            onChangeText={onChangeTextHandler}
                            styleContainer={{ marginBottom: 20 }}
                            label='Matric Number'
                            iconName="user-o"
                            icon
                            IconPack={FontAwesome}
                            iconColor={colors.grey45}
                            textColor={colors.grey5}
                        />
                        <CustomPaperInputText
                            id='password'
                            errorText={formState.inputValidities['password'] || errorPassword}
                            initialValue={formState.inputValue['password']}
                            onChangeText={onChangeTextHandler}
                            style={{ marginBottom: 30 }}
                            label='Password'
                            icon
                            iconName="unlock"
                            password={true}
                            textColor={colors.grey5}
                            iconColor={colors.grey45}
                        />
                        <TouchableOpacity style={{ marginVertical: 10, alignSelf: "flex-end" }}>
                            <Text style={{ ...styles.font }} >Forgot Password </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ marginVertical: 10 }}>
                            <Text style={{ ...styles.font, }} >Don't have an account? Register </Text>
                        </TouchableOpacity>
                        <CustomButtonSubmit
                            onPress={() => {
                                loading
                                    ?
                                    {}
                                    :
                                    HandleSubmit(formState.inputValue)
                            }}
                            disabled={!formState.formValid}
                            style={{ width: "70%", }}
                            loading={loading}
                            lable={'Login'}
                        />
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
    font: {
        fontSize: 12,
        fontFamily: "regular",
        color: colors.grey45
    }
});