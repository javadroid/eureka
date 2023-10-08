import { Feather } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react'
import { Button, TouchableOpacity, ImageBackground, TextInput, StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBackground from '../header/HeaderBackground';
import { Portal, Provider } from 'react-native-paper';

const colorsLinearGradient = [
  'rgba(245, 187, 250, 0.29)',
  'rgba(255, 255, 255, 0.55)',
  'rgba(254, 249, 255, 0.987114)',
  'rgba(255, 255, 255, 0.949964)',
  'rgba(255, 255, 255, 0.84049)',
  '#F7E9F8'
];
export default function CustomPageCointainer({ edgeTop = '' as any, style = {}, children = undefined as any }) {
  return (

    <SafeAreaView edges={['right', 'left', 'bottom', edgeTop]} style={{ ...styles.container, ...style as StyleSheet }}>
      
          {children}
         
    </SafeAreaView>


  )
}
// PageCointainer.propTypes = {edges:[],style:{}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    backgroundColor: colors.background

  }
});
