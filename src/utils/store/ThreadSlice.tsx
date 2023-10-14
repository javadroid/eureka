import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const threadSlice = createSlice({
    name: 'thread',
    initialState: {
        thread: []
    },

    reducers: {
        addThread: (state, action) => {
            const { payload } = action
            if (state.thread.length === 0) {
                state.thread.push(payload.data)
            } else {
                const check = state.thread.filter((data) => data.id === payload.data.id)
                
                console.log("check",check)
                if (check.length===0) {
                    state.thread.push(payload.data)
                }else{
                   
                }
             }
        },
        removeThread: (state, action) => {

            state.thread.pop()
        },
        mainThread: (state, action) => {
            state.thread = []
            state.thread.push(payload.data)
        },
        clearThread: (state, action) => {
            state.thread = []

        },

    }
})

export const { addThread, removeThread, clearThread, mainThread } = threadSlice.actions

export default threadSlice.reducer