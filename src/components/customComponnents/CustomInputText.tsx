import PropTypes from 'prop-types'
import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react'
import { Button, TouchableOpacity, ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../constant/colors';

export default function CustomInputText({
  autoCapitalize = 'none' as any, keyboardType = "default" as any,
  id = "", onChangeText = undefined as any, password = false,
  errorText = '', label = '', iconName = "user-o",
  icon = false, iconSize = 24, IconPack = FontAwesome as any,
  iconColor = colors.grey,initialValue=undefined as any }) {

  const [value, setvalue] = useState(initialValue)
  const [secureTextEntry, setsecureTextEntry] = useState(password)
  const onChangeTextHandler = (inputValue: string) => {
    setvalue(inputValue)
    onChangeText(id, inputValue)
  }

  const handlesecureTextEntry = () => {
    setsecureTextEntry(!secureTextEntry)

  }
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{label}</Text>
      <View style={styles.inputContainer}>
        {icon && (
          <IconPack style={styles.icon} name={iconName} size={iconSize} color={iconColor} />

        )}
        <TextInput autoCapitalize={autoCapitalize}
          keyboardType={keyboardType} id={id} secureTextEntry={secureTextEntry}
         value={value}
          onChangeText={onChangeTextHandler} style={styles.input} />

        {password && (
          <TouchableOpacity onPress={handlesecureTextEntry} >
            <Feather style={styles.icon} name={!secureTextEntry ? "eye" : "eye-off"}
              size={iconSize} color={iconColor} />
          </TouchableOpacity>

        )}
      </View>
      {errorText !== "" && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}

    </View>
  )
}

// TextInput.propTypes = {}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    
  },
  lable: {
    fontFamily: "bold",
    marginVertical: 8,
    letterSpacing: 0.3,
    color: colors.textColor,

  },
  inputContainer: {
    width: "100%",
    backgroundColor: colors.nearlyWhite,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',

  },
  icon: {
    marginRight: 10,
    color: colors.grey,

  },
  input: {
    color: colors.textColor,
    flexGrow: 1,
    fontFamily: "regular",
    letterSpacing: 0.3,
    paddingTop: 0,

  },
  errorContainer: {

    marginVertical: 5
  },
  errorText: {
    color: colors.textError,
    fontSize: 13,
    fontFamily: "regular",
    letterSpacing: 0.3,
  },
});

