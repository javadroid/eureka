import React from 'react'
import { View, StyleSheet, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import colors from '../../constants/colors'
import CustomPageCointainer from '../../components/customComponnents/CustomPageContainer'
import { HeaderMenu } from '../../components/header/HeaderMenu'
import CustomHeader from '../../components/customComponnents/CustomHeader'
import fontSize from '../../constants/fontSize'
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler'
import ItemList from '../../components/flat/ItemList'
import { MaterialIcons } from '@expo/vector-icons';

const datas = [{ title: 'Title', caption: 'Caption', },
    { title: 'Title', caption: 'Caption', },
    { title: 'Title', caption: 'Caption', },
    { title: 'Title', caption: 'Caption', },
    { title: 'Title', caption: 'Caption', },
    { title: 'Title', caption: 'Caption', },
    { title: 'Title', caption: 'Caption', },
    { title: 'Title', caption: 'Caption', },
    ]
export default function SectionList({ navigation, isCustomHeader = true, isSearchBox = true,data=datas}) {
    
    return (
        <>
            <View style={styles.floatContainer}>
                <TouchableOpacity style={styles.floatButton}>
                    <Feather name="eye-off" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.floatButton}>
                    <MaterialIcons name="feedback" size={24} color="white" />
                    {/* <Text style={styles.floatText}>Feedback</Text> */}
                </TouchableOpacity>
            </View>
            <CustomPageCointainer style={{ display: 'flex' }} edgeTop={'top'} >
                <HeaderMenu navigation={navigation} />

                {isCustomHeader && <CustomHeader style={{ ...styles.headerTitle, ...{} }} label='Faculties' />}

                {isSearchBox &&
                    <View style={{ ...styles.searchBox, ...{ marginTop: isCustomHeader ? 18 : 60 } }}>
                        <Feather name="search" size={24} color="white" />
                        <TextInput placeholderTextColor={'white'} placeholder='Courses' style={styles.searchText} />
                    </View>}

                <FlatList  data={data} renderItem={(item)=>ItemList(item,navigation)} />



            </CustomPageCointainer >
        </>

    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: colors.primaryHover,
        padding: 10

    },
    headerTitle: {
        marginTop: 60,
        fontFamily: 'bold',
        fontSize: fontSize.title.fontSize,
        lineHeight: fontSize.title.lineHeight,
        color: colors.textColor,

    },
    searchBox: {
        display: 'flex',
        borderRadius: 25,
        backgroundColor: colors.primaryHover,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        width: '100%',
        marginBottom: 30,
    },
    searchText: {
        color: 'white',
        flexShrink: 1,
        fontFamily: 'interRegular',
        fontSize: fontSize.body.fontSize,
        lineHeight: fontSize.body.lineHeight,
        width: '100%',
        marginHorizontal: 12,

    },
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
    floatText:{
        fontFamily:'interRegular',
        fontSize:8,
        color:'white'

    },
})