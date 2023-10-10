import PropTypes from 'prop-types'
import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react'
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import colors from '../../constants/colors';
import { Button } from 'react-native-paper';
import fontSize from '../../constants/fontSize';


export default function CustomText({ style = {},
  color = colors.grey45,
  text = '',
  fontFamily="regular",
  fontsize= fontSize.body,
      
 
}) {
  const styles = StyleSheet.create({
    
    lable: {
      fontFamily: fontFamily,
      // marginVertical: 8,
      fontSize: fontsize.fontSize,
      lineHeight: fontsize.lineHeight,
      letterSpacing: 0.3,
      padding:8,
      color: color,
    },
  });
  return (
   <Text style={{...styles.lable,...style}}>{text}</Text>
  )



}

