import PropTypes from 'prop-types'
import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react'
import { Button, TouchableOpacity, ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import colors from '../../constants/colors';

import fontSize from '../../constants/fontSize';


export default function CustomButtonSubmit({style={},onLongPress=undefined as any,onPress=undefined as any,color=colors.primaryColor,lable='',disabled=false}) {
  const styles = StyleSheet.create({
    button: {
   backgroundColor: disabled?colors.lightGrey:color,
  //  paddingHorizontal:30,
   paddingVertical:8,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center',
   width:'100%'
    },
    lable:{
      fontFamily:"interBold",
      marginVertical:8,
      fontSize:fontSize.bodyLarge.fontSize,
      lineHeight:fontSize.bodyLarge.lineHeight,
      letterSpacing:0.3,
      color: disabled?colors.grey:"white",

    },
  });
  return (
    <TouchableOpacity   
    activeOpacity={0.6}
    onLongPress={disabled?()=>{}:onLongPress} 
    onPress={disabled?()=>{}:onPress} 
    style={{...styles.button, ...style}}>
        <Text style={styles.lable}>{lable}</Text>
    </TouchableOpacity>
  )


  
}

