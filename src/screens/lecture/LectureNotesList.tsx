import React, { useState } from 'react'
import { View, StyleSheet, Text, FlatList, ScrollView, TouchableOpacity, Modal, Alert, TouchableWithoutFeedback, Pressable } from 'react-native'

import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler'

import { MaterialIcons } from '@expo/vector-icons';
import CustomHeader from '../../components/customComponnents/CustomHeader';
import CustomPageCointainer from '../../components/customComponnents/CustomPageContainer';
import ItemList from '../../components/flat/ItemList';
import { HeaderMenu } from '../../components/header/HeaderMenu';
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';
import FloatingButton from '../../components/button/FloatingButton';
import TabNavigation from '../../navigations/TabNavigation';
import LectureNotesItemList from '../../components/flat/LectureNotesItemList';

const datas = [{ title: 'CSC111', caption: '2 Topics', },
{ title: 'CSC111', caption: '2 Topics', topics: ['Introduction and the course overview.', 'Downloading Unity.', 'Installing Unity and Taking a look at interface.', 'Your First Game.', 'Introduction and the course overview.', 'Downloading Unity.', 'Installing Unity and Taking a look at interface.', 'Your First Game.'] },
{ title: 'CSC111', caption: '2 Topics', },
{ title: 'CSC111', caption: '2 Topics', },
{ title: 'CSC111', caption: '2 Topics', },
{ title: 'CSC111', caption: '2 Topics', },
{ title: 'CSC111', caption: '2 Topics', },
{ title: 'CSC111', caption: '2 Topics', },
]
export default function LectureNotesList({ navigation, isCustomHeader = true, isSearchBox = true, data = datas }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [expand, setExpand] = useState(false)
    const HandleExam = () => {
        setModalVisible(false)
        navigation.navigate('LectureNotes')
    }

    return (
        <>
            <FloatingButton />
            <CustomPageCointainer style={{ display: 'flex' }} edgeTop={'top'} >
                <HeaderMenu navigation={navigation} />

                {isCustomHeader && <CustomHeader style={{ ...styles.headerTitle, ...{} }} label='Search for courses' />}

                {isSearchBox &&
                    <View style={{ ...styles.searchBox, ...{ marginTop: isCustomHeader ? 18 : 60 } }}>
                        <Feather 
                        name="search" 
                        size={24} 
                        color="white" 
                        />
                        <TextInput 
                        placeholderTextColor={colors.extraLightGrey} 
                        placeholder='Courses' 
                        cursorColor={'white'}
                        style={styles.searchText} 
                        />
                    </View>}

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<View style={{ height: 22 }} />}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                        scrollEnabled={!expand} 
                        nestedScrollEnabled={false}
                        data={data}
                        renderItem={(item) => {
                            return (
                                <LectureNotesItemList 
                                itemData={item} 
                                navigation={navigation} 
                                navigate='LectureNotes'  
                                setExpand={setExpand} 
                                />
                            )
                        }
                        } />

            </CustomPageCointainer >
            {/* <TabNavigation/> */}
        </>

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: colors.primaryHover,
        padding: 10
    },
    headerTitle: {
        marginTop: 70,
        fontFamily: 'bold',
        fontSize: fontSize.title2.fontSize,
        lineHeight: fontSize.title.lineHeight,
        color: colors.textColor,
        // alignSelf:'center',
    },
    searchBox: {
        display: 'flex',
        borderRadius: 25,
        backgroundColor: colors.primaryHover,
        paddingHorizontal: 16,
        paddingVertical: 10,
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
        elevation: 2
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
    floatText: {
        fontFamily: 'interRegular',
        fontSize: 8,
        color: 'white'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        // margin: 20,
        backgroundColor: colors.primaryHover,
        padding: 40,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalViewHeaderText: {
        fontFamily: 'bold',
        fontSize: fontSize.title.fontSize,
        lineHeight: fontSize.title.lineHeight,
        color: "white",
        marginBottom: 30,
    },
    modalButtons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        // width:'100%',
    },
    Button: {
        backgroundColor: 'white',
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalButtonText: {
        fontFamily: 'interRegular',
        fontSize: fontSize.caption.fontSize,
        lineHeight: fontSize.caption.lineHeight,
        color: colors.textColor,
        textAlign: 'center',
    }
})