import React from 'react'
import { ValidationEmail, ValidationPhone, ValidationString } from '../ValidationConstraints'

export default function FormActions(inputId: any,inputValue: any) {
    if(inputId==="fullname"|| inputId==="username"|| inputId==="password"||
        inputId==="department" || inputId==="faculty"|| inputId==="gender"|| 
        inputId==="matricNo"|| inputId==="dob"|| inputId==="phoneNo"
        || inputId==="title"|| inputId==="date" || inputId==="startTime"){
        const val=  ValidationString(inputId, inputValue)
          return (val)
        }else if(inputId==="email"){
          const val=  ValidationEmail(inputId, inputValue)
          return (val)
        }
}
