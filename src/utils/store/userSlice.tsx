import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userToken: {}, 
        isAuthenticated: false,
        userData:{}      
    }, 
    
    reducers: {
        setUserToken: (state, action) => {
            const { payload } = action
            state.userToken = payload.userToken  
        },
        setUserData: (state, action) => {
            const { payload } = action
            state.userData = payload.userData  
        },
        setIsAuthenticated: (state, action) => {
            const { payload } = action
            state.isAuthenticated = payload.isAuthenticated 
            
        },
        
       
    }
})

export const {setUserToken,setUserData,setIsAuthenticated} = userSlice.actions

export default userSlice.reducer