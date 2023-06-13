import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const expoUpdate = createSlice({
    name: 'expoUpdate',
    initialState: {
        updateStatus: 'Checking for updates...', 
            
    }, 
    
    reducers: {
        checkExpoUpdate: (state, action) => {
            const { payload } = action
            state.updateStatus = payload.updateStatus
        },
        
       
    }
})

export const checkExpoUpdate = expoUpdate.actions.checkExpoUpdate

export default expoUpdate.reducer