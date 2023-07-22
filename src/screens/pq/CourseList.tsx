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
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerComponent } from './DrawerComponent';

const datas = [{ title: 'CSC111', caption: 'Introduction to computer',questionNo:40 },
{ title: 'CSC111', caption: 'Introduction to computer',questionNo:40 },
{ title: 'CSC111', caption: 'Introduction to computer',questionNo:40 },
{ title: 'CSC111', caption: 'Introduction to computer',questionNo:40 },
{ title: 'CSC111', caption: 'Introduction to computer',questionNo:40 },
{ title: 'CSC111', caption: 'Introduction to computer',questionNo:40 },
{ title: 'CSC111', caption: 'Introduction to computer',questionNo:40 },
{ title: 'CSC111', caption: 'Introduction to computer',questionNo:40 },
]
export default function CourseList({ navigation, isCustomHeader = true, isSearchBox = true, data = datas }) {
    const [modalVisible, setModalVisible] = useState(false)
    const[answerVisible, setAnswerVisible]=useState(false)
    const HandleExam =() => {
        setModalVisible(false)
        navigation.navigate('Questions')
    }
    const displayAnswer = () => {
        setAnswerVisible(!answerVisible)
    }
    const floatingButtonItem=[
        {IconPack:Feather,iconName:answerVisible?'eye':'eye-off',color:'white',size:24,onPress:displayAnswer},
        {IconPack:MaterialIcons,iconName:'feedback',color:'white',size:24,onPress:displayAnswer},
        ]
    return (
        <>
         
         
            {/* <FloatingButton item={floatingButtonItem} /> */}
            
            <CustomPageCointainer style={{ flex: 1 }} edgeTop={'top'} >
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
                    </View>
                }

                <Modal 
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {setModalVisible(!modalVisible)}}
                >
                    <Pressable 
                    onPress={() => setModalVisible(false)} 
                    style={styles.centeredView}
                    >
                        <Pressable 
                        onPress={() => {}} 
                        style={styles.modalView}
                        >
                            <Text style={styles.modalViewHeaderText}>Choose question type</Text>

                            <View style={styles.modalButtons}>
                                <TouchableOpacity 
                                activeOpacity={0.6}
                                style={styles.Button} 
                                onPress={() => {
                                    // setModalVisible(!modalVisible);
                                }}>
                                    <Text style={styles.modalButtonText}>
                                        Test
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                activeOpacity={0.6}
                                style={styles.Button} 
                                onPress={HandleExam}
                                >
                                    <Text style={styles.modalButtonText}>
                                        Exam
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </Pressable>
                    </Pressable>

                </Modal>

                <FlatList 
                data={data} 
                ListHeaderComponent={<View style={{ height: 22 }} />}
                ListFooterComponent={<View style={{ height: 50 }} />}
                showsVerticalScrollIndicator={false}
                renderItem={(item) => ItemList(item, navigation, undefined, {}, setModalVisible)} 
                />

               

            </CustomPageCointainer >
            {/* <TabNavigation/> */}
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
        marginTop: 68,
        fontFamily: 'bold',
        fontSize: fontSize.title2.fontSize,
        lineHeight: fontSize.title.lineHeight,
        color: colors.textColor,
        // alignSelf:'center',
    },
    searchBox: {
        borderRadius: 25,
        backgroundColor: colors.primaryHover,
        paddingHorizontal: 16,
        paddingVertical: 10,
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
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
        backgroundColor: colors.primaryHover,
        paddingVertical: 30,
        paddingHorizontal: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 10,
        marginBottom: 24
    },
    modalViewHeaderText: {
        fontFamily: 'bold',
        fontSize: fontSize.title.fontSize,
        lineHeight: fontSize.title.lineHeight,
        color: "white",
        marginBottom: 25,
    },
    modalButtons: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        gap: 20
        // width:'80%',
    },
    Button: {
        backgroundColor: 'white',
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 24,
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


