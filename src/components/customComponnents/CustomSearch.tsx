import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';
import { typescale } from '../../constants/Typography';

export default function CustomSearch({lable="Search",style={}}) {
  return (
    <TextInput 
    placeholder={lable} 
    placeholderTextColor={colors.grey3}
    mode='outlined' 
    contentStyle={{fontFamily:"regular",
    fontSize:fontSize.caption.fontSize,
    lineHeight:fontSize.caption.lineHeight,
    letterSpacing:0.3,}}
    cursorColor={colors.grey5} 
    textColor={colors.grey5} 
    activeOutlineColor={colors.button1} 
    outlineColor='transparent' 
    outlineStyle={{ borderRadius:30,borderWidth:0.5}}
     style={{...styles.container,...typescale.bodyMedium,...style,}} />
  )
}

const styles = StyleSheet.create({
 
    container: {
        backgroundColor:colors.grey2,
        // marginBottom:30,
        height:35,
    },
  

});