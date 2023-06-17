import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

export default function CustomKeyboardAvoidingView({ children=undefined as any }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : undefined}
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}>
      {children}


    </KeyboardAvoidingView>
  )
}
