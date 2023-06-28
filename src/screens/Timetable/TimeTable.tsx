import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native'
import React, { useCallback, useReducer, useRef, useState } from 'react'
import CustomPageCointainer from '../../components/customComponnents/CustomPageContainer'
import fontSize from '../../constants/fontSize'
import { HeaderProfileMenu } from '../../components/header/HeaderMenu'
import colors from '../../constants/colors'
import CustomHeader from '../../components/customComponnents/CustomHeader'
import Svg, { G, Path } from 'react-native-svg'
import FloatingButton from '../../components/button/FloatingButton'
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { formReducer } from '../../utils/reducers/FormReducers'
import CustomInputText from '../../components/customComponnents/CustomInputText'
import FormActions from '../../utils/actions/FormActions'
import CustomButtonSubmit from '../../components/customComponnents/CustomButtonSubmit'

const initialState = {
  inputValue: {
    title: "",
    lecturer: "",
    venue: "",
    note: "",
    date: "",
    startTime: "",
    endTime: "",
    color: "",
    taskType: "",

  },
  inputValidities: {
    title: false,
    lecturer: true,
    venue: true,
    note: true,
    date: false,
    startTime: false,
    endTime: true,
    color: false,
    taskType: false,

  },
  formValid: false
}
export default function TimeTable({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [formState, dispatchFormState] = useReducer(formReducer, initialState)
  const pickerGenderRef = useRef<any>(null);
  const pickerColor = useRef<any>(null);
  const pickerTasktype = useRef<any>(null);

  const onChangeTextHandler = useCallback((inputId: any, inputValue: any) => {
    const result = (FormActions(inputId, inputValue))
    console.log(result, inputId)
    dispatchFormState({ inputId, validationResult: result, inputValue })
  }, [dispatchFormState])
  const HandleExam = () => {
    setModalVisible(false)

  }
  const onpressFloatButton = () => {
    setModalVisible(true)
  }
  return (

    <>
      <FloatingButton item={[{ IconPack: Feather, iconName: 'plus', size: 24, color: 'white', onPress: onpressFloatButton }]} />
      <CustomPageCointainer edgeTop={'top'} style={{ paddingHorizontal: 0 }}>
        <HeaderProfileMenu headerTitleStyle={styles.MainheaderTitle} headerTitle='TimeTable' navigation={navigation} />
        <CustomHeader style={{ ...styles.headerTitle, ...{} }} label={new Date().toDateString()} />
        <CustomHeader style={{ ...styles.headerTitle2, ...{} }} label={'My class schedule'} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>TimeTable</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>TimeTable</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>TimeTable</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ ...styles.button, ...styles.buttonIcon }}>
            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <G id="vuesax/outline/setting-4">
                <G id="vuesax/outline/setting-4_2">
                  <G id="setting-4">
                    <Path id="Vector" d="M14.6666 4.83325H10.6666C10.3933 4.83325 10.1666 4.60659 10.1666 4.33325C10.1666 4.05992 10.3933 3.83325 10.6666 3.83325H14.6666C14.94 3.83325 15.1666 4.05992 15.1666 4.33325C15.1666 4.60659 14.94 4.83325 14.6666 4.83325Z" fill="#292D32" />
                    <Path id="Vector_2" d="M4.00004 4.83325H1.33337C1.06004 4.83325 0.833374 4.60659 0.833374 4.33325C0.833374 4.05992 1.06004 3.83325 1.33337 3.83325H4.00004C4.27337 3.83325 4.50004 4.05992 4.50004 4.33325C4.50004 4.60659 4.27337 4.83325 4.00004 4.83325Z" fill="#292D32" />
                    <Path id="Vector_3" d="M6.66671 7.16667C5.10671 7.16667 3.83337 5.89333 3.83337 4.33333C3.83337 2.77333 5.10671 1.5 6.66671 1.5C8.22671 1.5 9.50004 2.77333 9.50004 4.33333C9.50004 5.89333 8.22671 7.16667 6.66671 7.16667ZM6.66671 2.5C5.65337 2.5 4.83337 3.32 4.83337 4.33333C4.83337 5.34667 5.65337 6.16667 6.66671 6.16667C7.68004 6.16667 8.50004 5.34667 8.50004 4.33333C8.50004 3.32 7.68004 2.5 6.66671 2.5Z" fill="#292D32" />
                    <Path id="Vector_4" d="M14.6667 12.1667H12C11.7267 12.1667 11.5 11.9401 11.5 11.6667C11.5 11.3934 11.7267 11.1667 12 11.1667H14.6667C14.94 11.1667 15.1667 11.3934 15.1667 11.6667C15.1667 11.9401 14.94 12.1667 14.6667 12.1667Z" fill="#292D32" />
                    <Path id="Vector_5" d="M5.33337 12.1667H1.33337C1.06004 12.1667 0.833374 11.9401 0.833374 11.6667C0.833374 11.3934 1.06004 11.1667 1.33337 11.1667H5.33337C5.60671 11.1667 5.83337 11.3934 5.83337 11.6667C5.83337 11.9401 5.60671 12.1667 5.33337 12.1667Z" fill="#292D32" />
                    <Path id="Vector_6" d="M9.33333 14.4999C7.77333 14.4999 6.5 13.2266 6.5 11.6666C6.5 10.1066 7.77333 8.83325 9.33333 8.83325C10.8933 8.83325 12.1667 10.1066 12.1667 11.6666C12.1667 13.2266 10.8933 14.4999 9.33333 14.4999ZM9.33333 9.83325C8.32 9.83325 7.5 10.6533 7.5 11.6666C7.5 12.6799 8.32 13.4999 9.33333 13.4999C10.3467 13.4999 11.1667 12.6799 11.1667 11.6666C11.1667 10.6533 10.3467 9.83325 9.33333 9.83325Z" fill="#292D32" />
                  </G>
                </G>
              </G>
            </Svg>

          </TouchableOpacity>
        </View>

        <View style={styles.TimeTableContainer}>

          <View style={styles.TimeTableLeft}>



            <View style={{ ...styles.daysContainer, ...{ backgroundColor: colors.primaryHover } }}>
              <Text style={styles.daysText}>
                Mon
              </Text>
              <Text style={styles.daysNumber}>
                {11}
              </Text>
            </View>

            <View style={styles.daysContainer}>
              <Text style={styles.daysText}>
                Tue
              </Text>
              <Text style={styles.daysNumber}>
                {11}
              </Text>
            </View>

            <View style={styles.daysContainer}>
              <Text style={styles.daysText}>
                Wed
              </Text>
              <Text style={styles.daysNumber}>
                {11}
              </Text>
            </View>

            <View style={styles.daysContainer}>
              <Text style={styles.daysText}>
                Thur
              </Text>
              <Text style={styles.daysNumber}>
                {11}
              </Text>
            </View>

            <View style={styles.daysContainer}>
              <Text style={styles.daysText}>
                Fri
              </Text>
              <Text style={styles.daysNumber}>
                {11}
              </Text>
            </View>

            <View style={styles.daysContainer}>
              <Text style={styles.daysText}>
                Sat
              </Text>
              <Text style={styles.daysNumber}>
                {11}
              </Text>
            </View>
            <View style={styles.daysContainer}>
              <Text style={styles.daysText}>
                Sun
              </Text>
              <Text style={styles.daysNumber}>
                {11}
              </Text>
            </View>

          </View>



          <View style={styles.TimeTableRight}>
            <ScrollView horizontal={true} style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
              

              <View style={styles.taskContainer}>
                <Text style={styles.courseTitle}>
                  CSC 432
                </Text>
                <Text style={styles.courseTime}>
                  11am
                </Text>
              </View>
              <View style={styles.taskContainer}>
                <Text style={styles.courseTitle}>
                  CSC 432
                </Text>
                <Text style={styles.courseTime}>
                  11am
                </Text>
              </View>

            </ScrollView>

            <ScrollView horizontal={true} style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
              

              <View style={styles.taskContainer}>
                <Text style={styles.courseTitle}>
                  CSC 432
                </Text>
                <Text style={styles.courseTime}>
                  11am
                </Text>
              </View>
              <View style={styles.taskContainer}>
                <Text style={styles.courseTitle}>
                  CSC 432
                </Text>
                <Text style={styles.courseTime}>
                  11am
                </Text>
              </View>

            </ScrollView>


            <ScrollView horizontal={true} style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
              

              <View style={styles.taskContainer}>
                <Text style={styles.courseTitle}>
                  CSC 432
                </Text>
                <Text style={styles.courseTime}>
                  11am
                </Text>
              </View>
              <View style={styles.taskContainer}>
                <Text style={styles.courseTitle}>
                  CSC 432
                </Text>
                <Text style={styles.courseTime}>
                  11am
                </Text>
              </View>

            </ScrollView>


            <ScrollView horizontal={true} style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
              

              <View style={styles.taskContainer}>
                <Text style={styles.courseTitle}>
                  CSC 432
                </Text>
                <Text style={styles.courseTime}>
                  11am
                </Text>
              </View>
              <View style={styles.taskContainer}>
                <Text style={styles.courseTitle}>
                  CSC 432
                </Text>
                <Text style={styles.courseTime}>
                  11am
                </Text>
              </View>

            </ScrollView>


            <ScrollView horizontal={true} style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
              

              <View style={styles.taskContainer}>
                <Text style={styles.courseTitle}>
                  CSC 432
                </Text>
                <Text style={styles.courseTime}>
                  11am
                </Text>
              </View>
              <View style={styles.taskContainer}>
                <Text style={styles.courseTitle}>
                  CSC 432
                </Text>
                <Text style={styles.courseTime}>
                  11am
                </Text>
              </View>

            </ScrollView>


            <ScrollView horizontal={true} style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
              

              <View style={styles.taskContainer}>
                <Text style={styles.courseTitle}>
                  CSC 432
                </Text>
                <Text style={styles.courseTime}>
                  11am
                </Text>
              </View>
              <View style={styles.taskContainer}>
                <Text style={styles.courseTitle}>
                  CSC 432
                </Text>
                <Text style={styles.courseTime}>
                  11am
                </Text>
              </View>

            </ScrollView>


            <ScrollView horizontal={true} style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
              

              <View style={styles.taskContainer}>
                <Text style={styles.courseTitle}>
                  CSC 432
                </Text>
                <Text style={styles.courseTime}>
                  11am
                </Text>
              </View>
              <View style={styles.taskContainer}>
                <Text style={styles.courseTitle}>
                  CSC 432
                </Text>
                <Text style={styles.courseTime}>
                  11am
                </Text>
              </View>

            </ScrollView>


          </View>
        </View>


        <Modal animationType='slide'
          transparent={true}

          // style={{ width: 'auto', height: 'auto' }}
          visible={modalVisible}
          onRequestClose={() => {

            setModalVisible(!modalVisible);
          }}>
          <Pressable onPress={() => setModalVisible(false)} style={styles.centeredView}>
            <Pressable onPress={() => { }} style={styles.modalView}>
             
              <CustomInputText errorText={formState.inputValidities['title']} initialValue={formState.inputValue['title']} onChangeText={onChangeTextHandler} style={{ marginBottom: 0 }} id='title' label='Title' />


              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <CustomInputText errorText={formState.inputValidities['lecturer']} initialValue={formState.inputValue['lecturer']} onChangeText={onChangeTextHandler} styleContainer={{ width: '50%' }} id='lecturer' style={{ marginBottom: 0, }} label='Lecturer' />

                <CustomInputText errorText={formState.inputValidities['venue']} initialValue={formState.inputValue['venue']} onChangeText={onChangeTextHandler} styleContainer={{ width: '50%' }} id='venue' style={{ marginBottom: 0, }} label='Venue' />

              </View>
              <CustomInputText errorText={formState.inputValidities['note']} initialValue={formState.inputValue['note']} onChangeText={onChangeTextHandler} style={{ marginBottom: 0 }} id='note' label='Note' />
             
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <CustomInputText errorText={formState.inputValidities['date']} initialValue={formState.inputValue['date']} onChangeText={onChangeTextHandler} onPress={true} styleContainer={{ width: '50%' }} editable={false} id='date' style={{ marginBottom: 0, }} label='Date' />
                <CustomInputText errorText={formState.inputValidities['startTime']} initialValue={formState.inputValue['startTime']} onChangeText={onChangeTextHandler} mode={'time'} onPress={true} styleContainer={{ width: '50%' }} editable={false} id='startTime' style={{ paddingVertical:0, }} label='Start Time' />
              </View>

              <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <CustomInputText items={["f","hf"]} styleContainer={{ width: '50%' }} errorText={formState.inputValidities['color']} initialValue={formState.inputValue['color']} onChangeText={onChangeTextHandler} editable={false} pickerRef={pickerColor} style={{ marginBottom: 0, }} id='color' label='Color' />
                            <CustomInputText items={["f","dfrg"]} styleContainer={{ width: '50%' }} errorText={formState.inputValidities['taskType']} initialValue={formState.inputValue['taskType']} onChangeText={onChangeTextHandler} editable={false} pickerRef={pickerTasktype} id='taskType' style={{ marginBottom: 0 }} label='Task Type' />
                        </View>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' ,marginTop:10}}>
              <CustomButtonSubmit  style={{width: '40%',paddingVertical:5,backgroundColor:colors.primaryInactive}} lable='Cancel' />
              <CustomButtonSubmit disabled={!formState.formValid} style={{width: '40%',paddingVertical:5,}} lable='Add' />
              </View>


              
            </Pressable>
          </Pressable>

        </Modal>
      </CustomPageCointainer>
    </>

  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    maxWidth: '80%',
    padding: 20,
    borderRadius:10,
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
    color: "black",
    marginBottom: 10,
  },
 

  MainheaderTitle: {
    //  marginTop: 38,
    fontFamily: 'bold',
    fontSize: fontSize.bodyLarge.fontSize,
    lineHeight: fontSize.bodyLarge.lineHeight,
    color: 'black',

  },
  headerTitle: {
    marginTop: 70,
    fontFamily: 'bold',
    fontSize: fontSize.body.fontSize,
    lineHeight: fontSize.body.lineHeight,
    color: colors.textColor,
    alignSelf: 'center',

  },
  headerTitle2: {
    marginTop: 5,
    marginBottom: 28,
    fontFamily: 'bold',
    fontSize: fontSize.title.fontSize,
    lineHeight: fontSize.title.lineHeight,
    color: 'black',
    alignSelf: 'center',

  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,

  },
  button: {
    backgroundColor: colors.backgroundWhite,
    borderRadius: 20,
    borderWidth: 0.5,
    marginHorizontal: 5,
    borderColor: colors.borderColor,

    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  buttonText: {
    color: colors.textColor,
    fontFamily: 'interSemiBold',
    fontSize: fontSize.bodySmall.fontSize,
    lineHeight: fontSize.bodySmall.lineHeight,
    alignSelf: 'center',

  },
  buttonIcon: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 0,
  },
  TimeTableContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'red',
    // marginBottom:50,
  },
  TimeTableLeft: {
    maxWidth: '20%',
    height: '100%',
    flexDirection: 'column',
    // backgroundColor: 'green',
    justifyContent: 'space-between',
    // flexWrap:'wrap',
    alignItems: 'center',
    // marginRight:20,
    //  paddingBottom: 25,
    // paddingHorizontal: 10,

  },
  TimeTableRight: {
    // flexGrow:1,
    maxWidth: '80%',

    flexDirection: 'column',
    // backgroundColor: 'red',
  },
  daysContainer: {
    paddingHorizontal: 27,
    paddingVertical: 17.5,
  },
  daysText: {
    color: 'black',
    fontFamily: 'interSemiBold',
    fontSize: fontSize.bodySmall.fontSize,
    lineHeight: fontSize.bodySmall.lineHeight,
    alignSelf: 'center',
  },
  daysNumber: {
    color: colors.textColor,
    fontFamily: 'interSemiBold',
    fontSize: fontSize.caption.fontSize,
    lineHeight: fontSize.caption.lineHeight,
    alignSelf: 'center',
  },
  courseTitle: {
    color: 'black',
    fontFamily: 'interRegular',
    fontSize: fontSize.bodySmall.fontSize,
    lineHeight: fontSize.bodySmall.lineHeight,

  },
  courseTime: {
    color: colors.textColor,
    fontFamily: 'interSemiBold',
    fontSize: 10,


  },

  taskContainer: {
    // backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginRight: 20,
    marginBottom: 10,
  },
})