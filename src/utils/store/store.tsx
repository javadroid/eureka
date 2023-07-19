import { configureStore } from '@reduxjs/toolkit'
import internetConnectionSlice from './internetConnectionSlice'
import expoUpdateSlice from './expoUpdateSlice'
import userSlice from './userSlice'


export const store = configureStore({
  reducer: {
    internetConnection:internetConnectionSlice,
    expoUpdate:expoUpdateSlice,
    user:userSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch