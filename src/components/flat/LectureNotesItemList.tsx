

import { View, StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native'
import colors from '../../constants/colors'
import fontSize from '../../constants/fontSize'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { Item } from 'react-navigation-header-buttons';
import { useState } from 'react';

export default function LectureNotesItemList({itemData, navigation, navigate = undefined as any, navigateData = {}, setModalVisible = undefined as any,setExpand}) {

const [isExpanded, setisExpanded] = useState(false)
   
    const HandleExpand = () => {
        setExpand(!isExpanded)
        setisExpanded(!isExpanded)
    }
    const HandlePress = () => {
        navigate ? navigation.navigate(navigate, navigateData) : setModalVisible(true)
    }
    const NewView=!isExpanded?Pressable:View
    return (
        <NewView 
        onPress={HandlePress} 
        style={{ ...styles.container, ...{ marginTop: itemData.index === 0 ? 0 : 15 } }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.title}>{itemData.item.title}</Text>
                <TouchableOpacity onPress={() => HandleExpand()}>
                    <Entypo name={isExpanded ? "chevron-small-up" : "chevron-small-down"} size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }} >
                <FontAwesome name="book" size={20} color={colors.textColor} />
                <Text style={[styles.caption, { color: isExpanded ? colors.textColor : colors.grey }]}>{itemData.item.caption}</Text>

            </View>
            {isExpanded  && (
                <View style={{ maxHeight: 200, flexShrink: 1 }} >
                    <FlatList  
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<View style={{ height: 4 }} />}
                    ListFooterComponent={<View style={{ height: 5 }} />}
                    nestedScrollEnabled={false}  
                    data={itemData.item.topics} 
                    renderItem={ExplandedItem} 
                    />
                </View>
            )}

        </NewView>
    )
}
const ExplandedItem = (itemData) => {
    return (
        <>
            <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.expanded}>
                <Text style={{ color: colors.textColor, marginTop: 1.4 }} >●</Text>
                <Text style={{ ...styles.caption, flexShrink: 1 }}>{itemData.item}</Text>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 13.5,
        backgroundColor: 'white',
        borderRadius: 22,
        borderColor: colors.primaryHover,
        borderWidth: 1,
        paddingRight: 13,
        paddingTop: 14,
        paddingBottom: 21,
        paddingLeft: 16,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        // minHeight:120
    },
    title: {
        fontFamily: 'bold',
        fontSize: fontSize.title.fontSize,
        lineHeight: fontSize.title.lineHeight,
        color: colors.textColor,
        marginBottom: 20,

    },
    caption: {
        fontFamily: 'interRegular',
        fontSize: fontSize.body.fontSize,
        lineHeight: fontSize.body.lineHeight,
        color: colors.textColor,
        marginLeft: 10,
    },
    expanded: {
        flexShrink: 1, 
        flexDirection: 'row',
        paddingHorizontal: 10, 
        paddingVertical: 4
    }
})