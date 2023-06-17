import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function HeaderBackground() {
    const colors = [
        'rgba(245, 187, 250, 0.29)',
        'rgba(255, 255, 255, 0.55)',
        'rgba(254, 249, 255, 0.987114)',
        'rgba(255, 255, 255, 0.949964)',
        'rgba(255, 255, 255, 0.84049)',
        '#F7E9F8'
      ];
  return (
    <LinearGradient colors={colors} style={{ flex:1 }}
    start={[0, 0]}
    end={[1, 1]}
    locations={[0, 0.196, 0.4543, 0.7127, 0.9711, 1.2295]}
/>
   
  )
}