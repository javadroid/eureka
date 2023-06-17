import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import fontSize from '../../constants/fontSize'

export default function CustomHeader({label=''}) {
  return (
    <Text style={styles.headerTitle}>{label}</Text>
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