import { Picker } from '@react-native-picker/picker'
import React, { useRef } from 'react'

export default function CustomPicker({value=undefined as any,
    setValue=undefined as any,
    items=[] as any,
    pickerRef =undefined as any,
    }) {
   
    
  return (
    <Picker
    ref={pickerRef}
    selectedValue={value}
    onValueChange={(itemValue: any, itemIndex: any) =>
        setValue(itemValue)
    }>
        {items.map((item: any,itemIndex:any) =>{
            return <Picker.Item label={item} value={item} key={itemIndex} />
        })}
    
</Picker>
  )
}
