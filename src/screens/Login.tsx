import { View, Text, StyleSheet } from 'react-native'
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

const initialState = {

    inputValue: {
   
      matric: "",
      
      password: "",
     
  
    },
    inputValidities: {
        matric: false,
        password: false,
    },
    formValid: false
  }
export default function Login({  }) {
    const [formState, dispatchFormState] = useReducer(formReducer, initialState)
    const [matric, setmatric] = useState('');
    const [password, setPassword] = useState('');
    const [errorMatric, setErrorMatric] = useState<null|string>(null);
    const [errorPassword, setErrorPassword] = useState<null|string>(null);
    const [loading, setLoading] = useState(false);
    const onChangeTextHandler = useCallback((inputId: any, inputValue: any) => {
        const result = (FormActions(inputId, inputValue))
        console.log(result, inputId)
        dispatchFormState({ inputId, validationResult: result, inputValue })
      }, [dispatchFormState])
    // useEffect(() => {
    //     navigation.setOptions({`
    //         headerTitle: () => {
    //             return 
    //         }
    //     })
    // }, [])
    return (

        <CustomKeyboardAvoidingView>
            <CustomPageCointainer edgeTop={'top'} style={{flex:1}}>
                <View > 
                    <CustomHeader label='Login'/>
                </View>
                <View style={styles.container}>
                <View style={styles.loginContainer} >
                    <CustomInputText id='matric' errorText={formState.inputValidities['matric']||errorMatric} initialValue={formState.inputValue['matric']} onChangeText={onChangeTextHandler} style={{ marginBottom: 30 }} label='Matric Number' />
                    <CustomInputText  id='password' errorText={formState.inputValidities['password']||errorPassword} initialValue={formState.inputValue['password']} onChangeText={onChangeTextHandler} style={{ marginBottom: 30 }} label='Password' placeholder='******' password={true} />
                    <View style={{ marginBottom: 10 }}>
                        <Text>Forgot Password </Text>
                    </View>
                    <CustomButtonSubmit  disabled={!formState.formValid} style={{ marginBottom: 30 }} lable='Login' />
                    <View style={{ alignItems: 'center', }}>
                        <Text>Don't have an account? Sign up😎 </Text>
                    </View>
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
        padding: 20

    },
});