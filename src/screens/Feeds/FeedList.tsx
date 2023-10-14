import { View, Text } from 'react-native'
import React from 'react'
import CustomPageCointainer from '../../components/customComponnents/CustomPageContainer'
import CustomSearch from '../../components/customComponnents/CustomSearch'
import Feeds from './Feeds'
import { FlashList } from '@shopify/flash-list'
import { useNavigation } from '@react-navigation/native'
import { tweets } from './tweets'

export default function FeedList() {
  const navigate=useNavigation()
  return (
    <CustomPageCointainer  style={{ flex: 1 }}>
      <CustomSearch  lable="Search"/>
      
      <FlashList estimatedItemSize={tweets.length} data={tweets.filter(data=>data.comment!==true)} renderItem={(props)=><Feeds navigation={navigate} {...props}/>}/>
    </CustomPageCointainer>
  )
}