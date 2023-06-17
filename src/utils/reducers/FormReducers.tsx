import React from 'react'

export const formReducer = (state: any, action: any) => {
  const { validationResult, inputId, inputValue,formValid } = action;

  const updatedValue = {
    ...state.inputValue,
    [inputId]: inputValue
  }
  const updatedValidities = {
    ...state.inputValidities,
    [inputId]: validationResult
  }
  let updatedValidationValid = true;

  for (const key in updatedValidities) {
    if (updatedValidities[key] !== undefined) {
      updatedValidationValid = false;
      break;
    }
  }
  // console.log("validationResult", updatedValidationValid)

  const r = {
    inputValue: updatedValue,
    inputValidities: updatedValidities,
    formValid: formValid===false?false:updatedValidationValid
  }
  // console.log(r)
  // console.log(state)
  return r
}
