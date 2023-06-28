import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import fontSize from '../../constants/fontSize'

export default function CustomHeader({label='',style={}}) {
  return (
    <Text style={{...styles.headerTitle,...style}}>{label}</Text>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
      marginTop: 38,
      fontFamily: 'bold',
      fontSize: fontSize.header3.fontSize,
      lineHeight: fontSize.header3.lineHeight,
  },
})