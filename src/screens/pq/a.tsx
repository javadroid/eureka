import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import { useWindowDimensions } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { QuestionContext } from "../../context/QuestionContent";
import GestureRecognizer from "react-native-swipe-gestures";
import { questionsDemo } from "../../components/questions";
import { FloatingAction } from "react-native-floating-action";


export default function Questions({navigation,route}) {
  let richText = useRef<any>();
  let richText2 = useRef<any>();
  
  let { width } = useWindowDimensions();
  let [descHTML, setDescHTML] = useContext(QuestionContext);
  let [showDescError, setShowDescError] = useState(false);
  let [questionEnd, setQuestionEnd] = useState(false);

  let [selectedItem, setSelectedItem] = useState<number | null>(null);
  let [answercontent, setAnswercontent] = useState("");
  let [questions, setquestions] = useState([]);
  let [currentquestions, setcurrentquestions] = useState([] as any);
  const [isAnswering, setisAnswering] = useState(false);
  let [currentParent, setcurrentParent] = useState([] as any);
  let [temp, setTemp] = useState([] as any[]);
  let [tempMain, setTempMain] = useState([] as any[]);
  let [prev, setprev] = useState<number | null>(null);
  let [sub, setsub] = useState(true);
  const {courseDetails} = route.params;
  const action = [
    {
      text: "Remove Question",
      // icon: require("./images/ic_accessibility_white.png"),
      name: "Pop",
      position: 1
    },
    {
      text: "Add Question",
      // icon: require("./images/ic_accessibility_white.png"),
      name: "Add",
      position: 2
    },
    {
      text: sub?"Open Sub":"Back to Question"+currentParent.questionNo,
      // icon: require("./images/ic_language_white.png"),
      name: "Sub",
      position: 3
    },
    
  ];

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: courseDetails.courseDetails.courseCode +' '+courseDetails.year+' '+courseDetails.type});
  }, [navigation]);

  useEffect(() => {
    getQuestion()
    handleClick(0, questions[0]);
    // console.log(",dsf",currentquestions)
    // richText.current.insertHTML(descHTML);
  }, []);


  const getQuestion = () => {
    const q=questionsDemo.filter((question,index)=>
    question.courseCode===courseDetails.courseDetails.courseCode&&
    question.courseYear===courseDetails.year&&
    question.courseType===courseDetails.type
     )
    if(q&& q.length !==0 ){
      setquestions(q[0].questions)
    questions=q[0].questions
    }else {
     Alert.alert( 'Empty',
      'Do you want to provide pass questions?',
      [
        { 
          text: 'Cancel', 
         
          onPress: () =>  {
            navigation.goBack()
          }
        },
        {
          text: 'Yes',
          onPress: () =>  {
            setDescHTML('')
            descHTML=''
            handleAdd()
          }
        }
       
      ],  {cancelable:false})
    }
    
  };


  const richTextHandle = (descriptionText: React.SetStateAction<string>) => {
    if (descriptionText) {
      setShowDescError(false);
      currentquestions["question"] =descriptionText ;
      setDescHTML(descriptionText);
    } else {
      setShowDescError(true);
      setDescHTML("");
    }
  };

  const submitContentHandle = () => {
    const replaceHTML = descHTML.replace(/<(.|\n)*?>/g, "").trim();
    const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();

    if (replaceWhiteSpace.length <= 0) {
      setShowDescError(true);
    } else {
      // send data to your server!
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      videoQuality: 1,
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      onPressAddImage(result.assets[0]);
      // console.log("result.assets[0]",result.assets[0])
    }
  };

  const onPressAddImage = (image: any) => {
    if (image.type === "video") {
      const str = `data:video/mp4;base64,${image.base64}`;
      console.log(image);
      richText.current?.insertHTML(
        `<video controls src="${image.uri}" style="width: 100%; height: auto;"></video>`
      );
    } else if (image.type === "image") {
      const str = `data:image/gif;base64,${image.base64}`;
      console.log(str);
      richText.current?.insertImage(str);
    }
  };
   const handleDoubleClick = (question: any, index: number) => {
    if (question?.subquestions) {
      setsub(false);
      sub = false;

      setSelectedItem(0);
      selectedItem = 0;

      setcurrentParent(question);
      currentParent = question;

      setTemp(questions);
      temp = questions;
      setTempMain(questions);
      tempMain = questions;

      setquestions(question.subquestions);
      questions = question.subquestions;

      setprev(question.id);
      prev = question.id;

      
      setDescHTML("");
      descHTML = "";
      richText.current.setContentHTML('');

      setAnswercontent('')
      answercontent='';

      console.log("handleDoubleClick", question);
      
      
      if (question?.subquestions.length !== 0) {
        handleClick(0, questions[0]);
      }else{
        handleAdd()
      }
    }
  };
  const handleClick = (index: number, question: any) => {
    if(question===undefined){
      

    }else{
    setSelectedItem(index === selectedItem ? index : index);
    selectedItem = index === selectedItem ? index : index;
    setcurrentquestions(question);
    // currentquestions=question
    if (selectedItem !== null) {
      setDescHTML(question?.question);
      descHTML = question?.question;
    
      richText.current.setContentHTML(question?.question);
      setAnswercontent(question?.answer);
      answercontent = question?.answer;
      console.log("handleClick", question);
    } else {
      setDescHTML("");
      descHTML = "";
      setAnswercontent("");
      answercontent = "";
      console.log("handleClick", selectedItem);
    }}
  };
  const handleback = () => {
    // console.log(sub)
    setsub(true);
    sub = true;

    temp.forEach((question, index) => {
      if (question.id === prev) {
        question["subquestions"] = questions;
        setcurrentquestions(question);
        currentquestions = question;
        setSelectedItem(index);
        selectedItem = index;
        richText.current.setContentHTML(question?.question);
        setDescHTML(question?.question);
        setAnswercontent(question?.answer)
        console.log("handleback", question, selectedItem);
      }
    });
    setquestions(temp);

    questions = temp;

    temp = [];
    setTemp([]);
  };
  const nextQuestion = () => {
   
    questions.forEach((question, index) => {
      if (question?.id === currentquestions?.id) {
        if (question?.subquestions && question?.subquestions.length !== 0) {
          handleDoubleClick(questions[index], 0);
        } else {
          if (questions.length > index + 1) {
            handleClick(index + 1, questions[index + 1]);
            
          } else {
            if (!question?.subquestions) {
              if(!questionEnd){
                if(tempMain.length==prev!){
                
                 alert('End')
                  }else{
                    handleback();
                    if (selectedItem !== null) {
                      handleClick(selectedItem + 1, questions[selectedItem + 1]);               
                    }
                  
                  }
              
                  
                 
              
              }
          
             
            }
          }
        }
      }
    });
  };
  const prevQuestion = () => {

    for (let i = 0; i < questions.length; i++) {
      if (questions[i]?.id === currentquestions?.id) {
        const sub = questions[i].subquestions;
        const nextSub = questions[i - 1]?.subquestions;

        if (nextSub && nextSub.length > 0) {
          console.log("prevQuestion", sub, i);
          handleDoubleClick(questions[i - 1], i);
          handleClick(nextSub.length - 1, questions[nextSub.length - 1]);
        } else {
          if (i <= 0) {
            if (!questions[i]?.subquestions) {
              handleback();
              if (selectedItem)
                handleClick(selectedItem, questions[selectedItem]);
            }
          } else {
            handleClick(i - 1, questions[i - 1]);
          }
        }
      }
    }
  };
  const handlebackNav = () => {
    // console.log(sub)
    setsub(true);
    sub = true;

    temp.forEach((question, index) => {
      if (question.id === prev) {
    
        setSelectedItem(index);
        selectedItem = index;
      }
     
    });

    setquestions(temp);
    questions = temp;
    temp = [];
  setTemp([]);
  };
  const handleAdd = () => {
    if (!sub) {
      const newquestions = [
        ...questions,
        { id: `${questions.length + 1}`, question: "",  questionNo:` ${currentParent.id} Sub-Questions ${questions.length + 1}`, answer: "" },
      ];
     
      setquestions(newquestions);
      handleClick(questions.length + 1,{ id: `${questions.length + 1}`, question: "",  questionNo:` ${currentParent.id} Sub-Questions ${questions.length + 1}`, answer: "" })
      console.log(newquestions);
    } else {
      const newquestions = [
        ...questions,
        {
          id: `${questions.length + 1}`,
          question: "",
          subquestions: [],
          answer: "",
          questionNo:`${questions.length + 1}`
        },
      ];
      setquestions(newquestions);
      handleClick(questions.length + 1,  {
        id: `${questions.length + 1}`,
        question: "",
        subquestions: [],
        answer: "",
        questionNo:`${questions.length + 1}`
      })
      console.log(newquestions);
    }
  };

  const handleRemove = () => {
    //   if(selectedItem!== null){
    //     const newquestions = questions.filter((question, idx) => idx !==selectedItem);
    //     setquestions(newquestions)

    //   console.log(newquestions)
    //  }

    const deletedquestions = questions.pop();
    
    const newquestions = questions.filter(
      (question, idx) => question.id !== deletedquestions?.id
    );
    console.log(newquestions);
    setquestions(newquestions);
    setTempMain(newquestions);

    if(currentquestions.id===deletedquestions?.id){
      handleClick(selectedItem!-1,questions[selectedItem!-1])
    }
  };

  const handleSelected=(name:string)=>{
   
   switch (name) {
    case 'Add':
      if(!currentquestions?.subquestions){
        setsub(false)
         sub=false
        handleAdd()

      }else{
        setsub(true)
         sub=true
        handleAdd()
      }
      break;
      case 'Sub':
       
        if(!currentquestions?.subquestions){
        handleback()
        }else{
          handleDoubleClick(currentquestions,0) 
        }
      break;
      case 'Pop':
        Alert.alert(
          'Remove',
          'Question '+questions[questions.length-1]?.questionNo,
          [
            {
              text: 'Cancel',
              style: 'cancel'
            },
            { 
              text: 'OK', 
              onPress: () =>  handleRemove()
            }
          ]
        );
          
      break;
    default:
      break;
   }
    
  }
  return (
    <SafeAreaView style={styles.container}>
        
      <View style={styles.container}>
      <Text>{JSON.stringify(courseDetails)}</Text>
        <Text>{currentquestions?.questionNo}</Text>
        <RichToolbar
          editor={richText}
          selectedIconTint="#873c1e"
          iconTint="#312921"
          actions={[
            actions.setBold,
            actions.setItalic,
            actions.alignLeft,
            actions.alignCenter,
            actions.alignRight,
            actions.insertBulletsList,
            actions.insertOrderedList,
            actions.insertLink,
            actions.setStrikethrough,
            actions.setUnderline,
            actions.keyboard,
            actions.setSuperscript,
            actions.setSubscript,
            actions.undo,
            actions.redo,
            actions.insertImage,
          ]}
          onPressAddImage={pickImage}
          style={styles.richTextToolbarStyle}
        />
        <GestureRecognizer
          style={{ flex:1, zIndex:1, }}
          onSwipeLeft={ nextQuestion}
          onSwipeRight={prevQuestion}
        >
           <View style={styles.displayContainer}>
              <View style={styles.htmlBoxStyle}>
             <ScrollView >
            <RichEditor
                ref={richText}
                onChange={richTextHandle}
                
                initialContentHTML={descHTML}
                placeholder="Write your cool content here :)"
                androidHardwareAccelerationDisabled={true}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                
              />

             </ScrollView>
             </View></View>
            </GestureRecognizer>
      {showDescError && (
        <Text style={styles.errorTextStyle}>
          Your content shouldn't be empty 🤔
        </Text>
      )}

      <TouchableOpacity
        style={styles.saveButtonStyle}
        onPress={submitContentHandle}
      >
        <Text style={styles.textButtonStyle}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.saveButtonStyle}
        onPress={() => {
          navigation.navigate("Main");
        }}
      >
        <Text style={styles.textButtonStyle}>back</Text>
      </TouchableOpacity>
      </View>
      
      <FloatingAction
    actions={action}
    shadow={{shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowColor: "#9c1e1e",
      shadowRadius: 2.62}}
      animated={true}
     dismissKeyboardOnPress={true}
     distanceToEdge={40}
     
    onPressItem={name => {
      handleSelected(name!)
    }}
  />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#ccaf9b",
    padding: 20,
  },
  displayContainer: {   
    display:'flex',
    flex:1,
    marginBottom: 10,
  },

  htmlBoxStyle: {
    backgroundColor: "#fff",
    padding: 10,
  
   flex:1,borderBottomLeftRadius: 10,
   borderBottomRightRadius: 10,
   borderWidth: 1,
   borderColor: "#ccaf9b",
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowOpacity: 0.23,
   shadowRadius: 2.62,
   elevation: 4,
   fontSize: 20,
    
  },

 
  richTextContainer: {
    flexDirection: "column-reverse",
    flex: 1,
    marginBottom: 10,
  },

  richTextEditorStyle: {
    flex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "#ccaf9b",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 20,
  },

  richTextToolbarStyle: {
    backgroundColor: "#c6c3b3",
    borderColor: "#c6c3b3",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    
  },

  errorTextStyle: {
    color: "#FF0000",
    marginBottom: 10,
  },

  saveButtonStyle: {
    backgroundColor: "#c6c3b3",
    borderWidth: 1,
    borderColor: "#c6c3b3",
    borderRadius: 10,
    padding: 10,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 20,
  },

  textButtonStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#312921",
  },
});
