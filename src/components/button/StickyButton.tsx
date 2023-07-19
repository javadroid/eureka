import React, { useRef, useState } from 'react'
import { TouchableOpacity, StyleSheet, View,Text, Animated } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import fontSize from '../../constants/fontSize';

export default function StickyButton({onPress}) {
    const threshold = 30; // Position threshold to open/close the drawer
    const boxWidth = useRef(new Animated.Value(5)).current;
    // const [zIndex, setzIndex] = useState(0)

    
    return (
        <View style={styles.floatContainer}>
            <TouchableOpacity onPress={onPress} style={styles.floatButton}>
  
                <MaterialCommunityIcons style={{transform:[{rotate:'90deg'}]}} name="arrow-right-thin-circle-outline" size={24} color="white" />
                <Text style={styles.floatText}>Goto</Text>
               
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({

    floatContainer: {
        zIndex: 1,
        position: 'absolute',
        alignSelf: 'center',
        top: '50%',
        bottom: '50%',
        end: 0
    },
    floatButton: {
        width: 80,
        height: 39,
        borderRadius: 24,
        
        backgroundColor: colors.primaryHover,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        transform: [{rotate:'-90deg'}]
    },
    floatText: {
        fontFamily: 'interRegular',
        fontSize: fontSize.caption.fontSize,
        marginRight:5,
        color: 'white'

    },
})