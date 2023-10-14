import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Feeds from './Feeds'
import { useNavigation } from '@react-navigation/native'
import CustomPageCointainer from '../../components/customComponnents/CustomPageContainer'
import { FlashList } from '@shopify/flash-list'
import { tweets } from './tweets'
import { Feather, FontAwesome } from '@expo/vector-icons';
import colors from '../../constants/colors'
import OneFeed from './oneFeed'
import { ScrollView } from 'react-native-gesture-handler'
import { Divider, TextInput } from 'react-native-paper'
import { Icon } from 'react-native-elements'
import CustomText from '../../components/customComponnents/CustomText'
import fontSize from '../../constants/fontSize'
import CustomComment from '../../components/customComponnents/CustomCommet'
import { Modal, Portal, PaperProvider } from 'react-native-paper';
import CustomPaperModal from '../../components/customComponnents/CustomPaperModal'
import CustomOptionList from '../../components/customComponnents/CustomOptionList'
import { FeedsAction } from '../../components/customComponnents/FeedsAction'
import { useDispatch, useSelector } from 'react-redux'
import { addThread, clearThread, mainThread, removeThread } from '../../utils/store/ThreadSlice'
import { BackHandler } from 'react-native'
const dots = [
    {
        name: "Link Up",
        icon: "feather",
        iconname: "user-plus",
        action: () => { }
    },
    {
        name: "Message Jack",
        icon: "feather",
        iconname: "send",
        action: () => { }
    },
    {
        name: "Reply Privately",
        icon: "feather",
        iconname: "mail",
        action: () => { }
    },
    {
        name: "Report",
        icon: "feather",
        iconname: "flag",
        action: () => { }
    },
]
const shareq = [
    {
        name: "Share As Direct Message",
        icon: "feather",
        iconname: "user",
        action: () => { }
    },
    {
        name: "Share To Group",
        icon: "feather",
        iconname: "users",
        action: () => { }
    },
    {
        name: "Post To TL",
        icon: "feather",
        iconname: "hash",
        action: () => { }
    },
    {
        name: "Others",
        icon: "feather",
        iconname: "corner-up-right",
        action: () => { }
    },
]
export default function OpenFeed({ navigation, route }) {
    const { item } = route.params;
    const [tweet, settweet] = useState([])
    const dispatch =useDispatch()
    const [tweetid, settweetid] = useState([])
    const [deep, setDeep] = useState(false)
    const [visible, setVisible] = useState<string | undefined>();
    const thread=useSelector((state:any)=>state.thread.thread)
    const hideModal = () => {
        setVisible(undefined)
        return true
    };
    useLayoutEffect(() => {

        thread.length===1 ?
        navigation.setOptions({ title: item?.name + " Post" }):
        navigation.setOptions({ title: "Back to "+thread[0]?.name + " Post" })
        navigation.setOptions({
            headerLeft: () =>
                <Feather
                    onPress={() => { 
                        dispatch(clearThread({data:item}))
                       if(thread.length===1){
                        
                        navigation.goBack()
                       }else{
                        navigation.navigate("OpenFeed", { item:thread[0] })
                       }
                         }}
                    style={{ marginRight: 20 }} size={22} color={colors.grey45} name='arrow-left' />
        })

    }, [item,thread])

   
    useEffect(() => {
        if (item) {
            console.log("thread",thread.length)
            const ss = []
            item.comments?.map((c) => {
                // console.log(tweets.filter(data=>data.id===c))
                ss.push(tweets.filter(data => data.id === c)[0])
                // 
            })
            settweet(ss)
        }

        
    }, [thread,item])

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', ()=>{
            if(thread.length===1){
                dispatch(clearThread({data:item}))
                navigation.goBack()
            }else{
                dispatch(removeThread({data:item}))
                navigation.navigate("OpenFeed", { item:thread[thread.length-2] })
            }
            return true
        });
    }, [thread])
    
    return (
        <>
            <CustomPageCointainer style={{ marginBottom: 80 }}>
                <OneFeed  item={{ ...item, comment: false }} navigate={undefined} />
            </CustomPageCointainer>
            {visible === "comments" && <CustomPaperModal modalPage={tweet.length < 1 && { minHeight: "30%" }} hideModal={hideModal}>
                {
                    tweet.length > 1 ? (
                        <FlashList estimatedItemSize={tweet.length} data={tweet} renderItem={(props) => <Feeds dispatch={dispatch} hideModal={hideModal} navigation={navigation} {...props} />} />
                    ) : (
                        <View >
                            <Icon size={50} name={"drive-file-rename-outline"} type={"material"} color={colors.grey45} />
                            <CustomText style={{ textAlign: "center" }} text='Be the first to comment' />
                        </View>
                    )
                }
            </CustomPaperModal>}
            {visible === "share" && <CustomPaperModal modalstyle={{ minHeight: "40%", marginTop: 20, marginLeft: 10, }} modalPage={{ minHeight: "40%", }} hideModal={hideModal}>
                <FlashList estimatedItemSize={10} data={shareq} renderItem={(props) => <CustomOptionList  {...props} />} />
            </CustomPaperModal>}
            {visible === "3dots" && <CustomPaperModal modalstyle={{ minHeight: "40%", marginTop: 20, marginLeft: 10, }} modalPage={{ minHeight: "40%", }} hideModal={hideModal}>
                <FlashList estimatedItemSize={10} data={dots} renderItem={(props) => <CustomOptionList  {...props} />} />
            </CustomPaperModal>}
            <View style={{ ...styles.FeedsActionContainer, width: "100%" }}>
                {/* <Divider style={{ marginTop: 10, backgroundColor: colors.grey2 }} /> */}
                <View style={styles.FeedsActionRight}>
                    <FeedsAction count={"123"} name='heart' type='feather' />
                    <FeedsAction onPress={() => visible==="comments"?setVisible(undefined): setVisible("comments")} count={"123"} name='message-circle' type='feather' />
                    <FeedsAction onPress={() =>  visible==="share"?setVisible(undefined): setVisible("share")} count={"123"} name='share-2' type='feather' />
                </View>
                <View style={{ marginTop: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <CustomComment lable='comment' />
                    <FeedsAction size={35} name='send' type='feather' />
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    FeedsActionContainer: { backgroundColor: "black", height: 80, position: "absolute", bottom: 0, padding: 8, flexDirection: "column", },
    FeedsActionRight: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 },
});