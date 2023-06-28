import React from 'react'
import { TouchableOpacity, StyleSheet, View,Text } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import fontSize from '../../constants/fontSize';

export default function StickyButton() {
    return (
        <View style={styles.floatContainer}>
            <TouchableOpacity style={styles.floatButton}>
  
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