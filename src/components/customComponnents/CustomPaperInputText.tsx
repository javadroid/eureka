import PropTypes from 'prop-types'
import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';
import CustomPicker from './CustomPicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import CustomPaperModal from './CustomPaperModal';

export default function CustomPaperInputText({
  autoCapitalize = 'none' as any,
  keyboardType = "default" as any,
  id = "",
  textColor = "white",
  password = false,
  errorText = null as any,
  label = '', iconName = "user-o",
  icon = false, iconSize = 22,
  IconPack = Feather as any,
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
  openPicker,


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
  
  return (

    <>
    
      <Pressable style={{ ...styles.container, ...styleContainer, }} onPress={label==="Gender" ? ()=>openPicker() : onPress ? openBodPicker : () => { }}>
      <TextInput
        label={<Text style={{ ...styles.errorText, color: iconColor }}>{label}</Text>}
        style={styles.TextInputContainer}
        textColor={textColor}
        activeUnderlineColor={iconColor}
        underlineColorAndroid={iconColor}
        underlineColor={iconColor}
        outlineColor={iconColor}
        selectionColor={iconColor}
        left={icon && <TextInput.Icon icon={() => <IconPack style={styles.icon} name={iconName} size={iconSize} color={iconColor} />} />}
        right={password && <TextInput.Icon size={iconSize} color={iconColor} onPress={handlesecureTextEntry} icon={secureTextEntry ? "eye" : "eye-off"} />}

        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        id={id}
        error={errorText ? true : false}
        secureTextEntry={secureTextEntry}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeTextHandler}
        editable={editable}
        textContentType={textContentType}
      />
      {errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}

      {datePickerVisible && (
        <Text>
          <RNDateTimePicker 
          mode={mode} display='spinner' 
          onPointerCancel={onTouchCancel} 
          onTouchCancel={onTouchCancel} 
          collapsable={true} 
          value={new Date()} 
          style={{backgroundColor:"red"}}
          onChange={handleBod} />;
        </Text>
      )
      }
     

    </Pressable>
    </>
    

  )
}

// TextInput.propTypes = {}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',

  },
  TextInputContainer: {
    backgroundColor: colors.background,
    borderBottomColor: colors.grey45

  },
  underlineStyle: {
    backgroundColor: colors.grey45,
    borderBottomColor: colors.grey45
  },
  contentStyle: {
    // backgroundColor: "white",
    color: colors.grey45
  },
  lable: {

    color: colors.grey45,

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
    // marginRight: 10,
    // color: colors.grey,

  },
  input: {
    color: colors.textColor,
    flexGrow: 1,
    fontFamily: "regular",
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

  },
  errorText: {
    color: "red",
    fontSize: 12,
    fontFamily: "regular",
    letterSpacing: 0.3,
  },
});

