import React from 'react'
import { View, StyleSheet, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'

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

const datas = [
    { title: 'Section 2019/2020',  },
    { title: 'Section 2019/2020',  },
    { title: 'Section 2019/2020',  },
    { title: 'Section 2019/2020',  },
    { title: 'Section 2019/2020',  },
    { title: 'Section 2019/2020',  },
    { title: 'Section 2019/2020',  },
    { title: 'Section 2019/2020',  },
    ]
    
export default function YearList({ navigation, isCustomHeader = true, isSearchBox = true,data=datas}) {
    
    return (
        <>
           <FloatingButton/>
            <CustomPageCointainer style={{ flex: 1 }} edgeTop={'top'} >
                <HeaderMenu navigation={navigation} />

                {isCustomHeader && <CustomHeader style={{ ...styles.headerTitle, ...{ } }} label='Search for past question' />}

                {isSearchBox &&
                    <View style={{ ...styles.searchBox, ...{ marginTop: isCustomHeader ? 18 : 60 } }}>
                        <Feather 
                        name="search" 
                        size={24} 
                        color={'white'} 
                        />
                        <TextInput 
                        placeholderTextColor={colors.extraLightGrey} 
                        placeholder='Enter Year' 
                        cursorColor={'white'}
                        style={styles.searchText} 
                        />
                    </View>
                }


                <FlatList  
                data={data}
                ListHeaderComponent={<View style={{ height: 22 }} />}
                ListFooterComponent={<View style={{ height: 50 }} />}
                showsVerticalScrollIndicator={false}
                renderItem={(item) => ItemList(item, navigation, 'CourseList')} 
                />

            </CustomPageCointainer >
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
        borderWidth: 1,
        borderColor: colors.primaryHover,
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
    floatText:{
        fontFamily:'interRegular',
        fontSize:8,
        color:'white'
    },
})