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
      paddingVertical: 8,
      borderRadius: 8,
      display: "flex",
      alignSelf: "center"
    },
    lable: {
      fontFamily: "bold",
      marginVertical: 8,
      fontSize: fontSize.bodyLarge.fontSize,
      lineHeight: fontSize.bodyLarge.lineHeight,
      letterSpacing: 0.3,
      color: disabled ? colors.grey : "white",

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

