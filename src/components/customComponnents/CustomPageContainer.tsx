import { Feather } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react'
import { Button, TouchableOpacity, ImageBackground, TextInput, StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBackground from '../header/HeaderBackground';

const colorsLinearGradient = [
  'rgba(245, 187, 250, 0.29)',
  'rgba(255, 255, 255, 0.55)',
  'rgba(254, 249, 255, 0.987114)',
  'rgba(255, 255, 255, 0.949964)',
  'rgba(255, 255, 255, 0.84049)',
  '#F7E9F8'
];
export default function CustomPageCointainer({edgeTop=''as any,style={},children=undefined as any}) {
   return (



    <LinearGradient colors={colorsLinearGradient} style={{ flex :1, display:'flex',}}
      start={[0, 0]}
      end={[1, 1]}
      locations={[0, 0.196, 0.4543, 0.7127, 0.9711, 1.2295]}
    >
      <SafeAreaView edges={ ['right', 'left', 'bottom',edgeTop]} style={{...styles.container, ...style }}>

        {children}
      </SafeAreaView>

    </LinearGradient >

  )
}
// PageCointainer.propTypes = {edges:[],style:{}}
const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    // backgroundColor:() =><HeaderBackground/>
   
  }
});
