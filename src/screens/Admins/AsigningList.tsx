import React from 'react'
import { View, StyleSheet, Text, TextInput,FlatList, ScrollView, TouchableOpacity } from 'react-native'
import colors from '../../constants/colors'
import CustomPageCointainer from '../../components/customComponnents/CustomPageContainer'
import { HeaderMenu } from '../../components/header/HeaderMenu'
import CustomHeader from '../../components/customComponnents/CustomHeader'
import fontSize from '../../constants/fontSize'
import { Feather } from '@expo/vector-icons';

import ItemList from '../../components/flat/ItemList'
import { MaterialIcons } from '@expo/vector-icons';


export default function AsigningList({ navigation, isCustomHeader = true, isSearchBox = true }) {
    const data = [{ title: 'Title', caption: 'Caption', },
    { title: 'Title', caption: 'Caption', },
    { title: 'Title', caption: 'Caption', },
    { title: 'Title', caption: 'Caption', },
    { title: 'Title', caption: 'Caption', },
    { title: 'Title', caption: 'Caption', },
    { title: 'Title', caption: 'Caption', },
    { title: 'Title', caption: 'Caption', },
    ]
    return (
        <>
            <CustomPageCointainer style={{ display: 'flex' , }}  >
                {/* <HeaderMenu navigation={navigation} /> */}

                {isCustomHeader && <CustomHeader style={{ ...styles.headerTitle, ...{} }} label='Faculties' />}

                <FlatList data={data} renderItem={(item) => ItemList(item, navigation,'AsigningList')} />
            </CustomPageCointainer >
        </>

    )
}
const styles = StyleSheet.create({
    
    headerTitle: {
        marginVertical: 10,
        fontFamily: 'bold',
        fontSize: fontSize.title.fontSize,
        lineHeight: fontSize.title.lineHeight,
        color: colors.textColor,

    },

})