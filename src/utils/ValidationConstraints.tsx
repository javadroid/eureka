import React from 'react'
import validate from 'validate.js'
export  function ValidationString(id:any, value:string) {
    const constraints: any = {
        presence: { allowEmpty: false }
    }
    if (value !== "") {
        constraints.length = {
            minimum:1,
            message: "cant be empty"
        }
    }
    const Validation = validate({ [id]: value }, { [id]: constraints })
 
    return Validation && Validation[id]
}

export  function ValidationEmail(id:any, value:string) {
    const constraints: any = {
        presence: { allowEmpty: false }
    }
    if (value !== "") {
        constraints.email =true
    }
    const Validation = validate({ [id]: value }, { [id]: constraints })
 
    return Validation && Validation[id]
}

export  function ValidationPhone(id:any, value:string) {
    const constraints: any = {
        presence: { allowEmpty: false }
    }
    if (value !== "") {
        constraints.length = {
            minimum:1,
            message: "cant be empty"
        }


    }
    const Validation = validate({ [id]: value }, { [id]: constraints })
 
    return Validation && Validation[id]
}
