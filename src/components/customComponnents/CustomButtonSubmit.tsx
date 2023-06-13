import PropTypes from 'prop-types'
import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react'
import { Button, TouchableOpacity, ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import colors from '../../../constant/colors';

export default function CustomButtonSubmit({style={},onLongPress=undefined as any,onPress=undefined as any,color=colors.primaryColor,lable,disabled=false}) {
  const styles = StyleSheet.create({
    button: {
   backgroundColor: disabled?colors.lightGrey:color,
   paddingHorizontal:30,
   paddingVertical:10,
   borderRadius:30,
   justifyContent: 'center',
   alignItems: 'center',
    },
    lable:{
      fontFamily:"bold",
      marginVertical:8,
      letterSpacing:0.3,
      color: disabled?colors.grey:"white",

    },
  });
  return (
    <TouchableOpacity   onLongPress={disabled?()=>{}:onLongPress} onPress={disabled?()=>{}:onPress} style={{...styles.button, ...style}}>
        <Text style={styles.lable}>{lable}</Text>
    </TouchableOpacity>
  )


  
}

