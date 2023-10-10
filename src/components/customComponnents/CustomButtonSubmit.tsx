import PropTypes from 'prop-types'
import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react'
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import colors from '../../constants/colors';
import { Button } from 'react-native-paper';
import fontSize from '../../constants/fontSize';


export default function CustomButtonSubmit({ style = {},
  onLongPress = undefined as any,
  onPress = undefined as any,
  color = colors.button1,
  lable = '',
  disabled = false,
  loading = false
}) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: color,
      display:"flex",
      justifyContent: 'center',
        alignItems: 'center',
      borderRadius: 8,
      
      
      alignSelf: "center"
    },
    lable: {
      fontFamily: "semibold",
      // marginVertical: 8,
      fontSize: fontSize.body.fontSize,
      lineHeight: fontSize.body.lineHeight,
      letterSpacing: 0.3,
      padding:8,
      color: disabled ? colors.grey :  colors.grey5,
    },
  });
  return (
    <Button
      loading={loading}
      mode="contained"
      onLongPress={disabled ? () => { } : onLongPress}
      onPress={disabled ? () => { } : onPress}
      style={{ ...styles.button, ...style }}

    >
      <Text style={styles.lable}>{lable}</Text>
    </Button>
  )



}

