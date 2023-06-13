import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const internetConnectionSlice = createSlice({
    name: 'internetConnection',
    initialState: {
        isConnected: null, 
        details:{}      
    }, 
    
    reducers: {
        checkConnection: (state, action) => {
            const { payload } = action
            state.isConnected = payload.isConnected
            state.details = payload.details
            
        },
        
       
    }
})

export const checkConnection = internetConnectionSlice.actions.checkConnection

export default internetConnectionSlice.reducer