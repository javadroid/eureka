import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../constants/colors';
export default function FloatingButton({item=[]as any[],style={}}) {
    return (
        <View style={styles.floatContainer}>

            {item.map((Item: any) =>{
                return (
                    <TouchableOpacity key={Item.iconName} style={{...styles.floatButton,...style}} onPress={ Item.onPress}>
                        <Item.IconPack name={Item.iconName} size={Item.size} color={Item.color} />
                    </TouchableOpacity>
                )
            })}
            {/* <TouchableOpacity style={styles.floatButton}>
                <Feather name="eye-off" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.floatButton}>
                <MaterialIcons name="feedback" size={24} color="white" />
                
            </TouchableOpacity> */}
        </View>
    )
}
const styles = StyleSheet.create({

    floatContainer: {
        zIndex: 1,
        position: 'absolute',

        alignSelf: 'flex-end',
        margin: 20,
        bottom: 50,
        end: 0
    },
    floatButton: {
        width: 60,
        height: 48,
        borderRadius: 24,
        marginVertical: 5,
        backgroundColor: colors.primaryHover,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    floatText: {
        fontFamily: 'interRegular',
        fontSize: 8,
        color: 'white'

    },
})