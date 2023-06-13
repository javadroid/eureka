import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import colors from '../../../constant/colors'

export default function CustomHeaderButton(props:any) {
 
    return (
        <HeaderButton 
            IconComponent={Ionicons} 
            iconSize={23} {...props}
            color={props.color ?? colors.blue } />
  )
}
