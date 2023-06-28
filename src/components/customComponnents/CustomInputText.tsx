import PropTypes from 'prop-types'
import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button, TouchableOpacity, ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableNativeFeedback, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';
import CustomPicker from './CustomPicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';


export default function CustomInputText({
  autoCapitalize = 'none' as any,
  keyboardType = "default" as any,
  id = "",

  password = false,
  errorText = '' as any,
  label = '', iconName = "user-o",
  icon = false, iconSize = 24,
  IconPack = FontAwesome as any,
  iconColor = colors.grey,
  initialValue = undefined as any,
  placeholder = '',

  style = {},
  textContentType = 'none' as any,
  editable = true,
  items = [] as any,
  pickerRef = undefined as any,
  onPress = undefined as any,
  onChangeText = undefined as any,
  mode = 'date',
  styleContainer = {},
}) {

  // const [value, setvalue] = useState(initialValue)
  const [secureTextEntry, setsecureTextEntry] = useState(password)
  const [active, setactive] = useState(false)
  const [value, setvalue] = useState(initialValue)
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  useEffect(() => {
    datePickerVisible
  }, [datePickerVisible])
  const onChangeTextHandler = (inputValue: string) => {
    setvalue(inputValue)
    onChangeText(id, inputValue)
  }
  const handlesecureTextEntry = () => {
    setsecureTextEntry(!secureTextEntry)

  }
  const handleFocus = () => {
    setactive(true)
  }
  const handleBlur = () => {
    setactive(false)
  }
  const openPicker = () => {

    pickerRef.current.focus();
  }
  function openBodPicker() {
    setDatePickerVisible(true)
  }
  const handleBod = (e, date: Date) => {
    if (mode === 'date') {
      setDatePickerVisible(false)
      setvalue(date.toDateString())
      onChangeText(id, date?.toISOString())
    } else if (mode === 'time') {
      setDatePickerVisible(false)
      // console.log(date.getHours())
      setvalue(date?.toLocaleTimeString())
      onChangeText(id, date?.toISOString())
    }

  }
  const onTouchCancel = () => {
    setDatePickerVisible(false)
    setvalue('')

  }
  // console.log(styleContainer)
  return (
    <Pressable style={{ ...styleContainer, }} onPress={pickerRef ? openPicker : onPress ? openBodPicker : () => { }}>
      <View style={{ ...styles.container, }}>
        <Text style={styles.lable}>{label}</Text>
        <View style={{
          ...styles.inputContainer, ...style,
          borderColor: active ? colors.primaryColor : (errorText) ? colors.errors : '#fff'
          , paddingVertical: pickerRef ? 5 : 10
        }}>
          {icon && (
            <IconPack style={styles.icon} name={iconName} size={iconSize} color={iconColor} />
          )}


          {datePickerVisible && (


            <Text>
              <RNDateTimePicker mode={mode} display='spinner' onPointerCancel={onTouchCancel} onTouchCancel={onTouchCancel} collapsable={true} value={new Date()} onChange={handleBod} />;
            </Text>
          )


          }

          <TextInput onFocus={handleFocus} onBlur={handleBlur} autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            id={id}
            secureTextEntry={secureTextEntry}
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeTextHandler}
            editable={editable}
            textContentType={textContentType}
            style={{ ...styles.input }} />

          {pickerRef && (
            <CustomPicker setValue={onChangeTextHandler} value={value} pickerRef={pickerRef} items={items} />

          )}

          {password && (
            <TouchableOpacity onPress={handlesecureTextEntry} >
              <Feather style={styles.icon} name={!secureTextEntry ? "eye" : "eye-off"}
                size={iconSize} color={iconColor} />
            </TouchableOpacity>

          )}
        </View>
        {errorText && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorText}</Text>
          </View>
        )}



      </View>
    </Pressable>
  )
}

// TextInput.propTypes = {}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
  },
  lable: {
    fontFamily: "regular",
    marginVertical: 8,
    letterSpacing: 0.3,
    fontSize: fontSize.body.fontSize,
    lineHeight: fontSize.body.lineHeight,
    color: colors.textColor,

  },
  inputContainer: {
    width: "100%",

    backgroundColor: colors.nearlyWhite,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexShrink: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  icon: {
    marginRight: 10,
    color: colors.grey,

  },
  input: {
    color: colors.textColor,
    flexGrow: 1,
    fontFamily: "interRegular",
    letterSpacing: 0.3,
    paddingTop: 5,
    flexShrink: 1,
    paddingBottom: 5,
    fontSize: fontSize.bodySmall.fontSize,
    lineHeight: fontSize.bodySmall.lineHeight,
    padding: 8,


  },
  errorContainer: {
    alignItems: 'flex-end',
    marginVertical: 5
  },
  errorText: {
    color: colors.errors,
    fontSize: 13,
    fontFamily: "interRegular",
    letterSpacing: 0.3,
  },
});

