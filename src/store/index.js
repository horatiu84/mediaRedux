import { configureStore} from '@reduxjs/toolkit'
import { usersReducer } from './slices/userSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,  // Importing the slice reducer for users slice
    }
})

export * from './thunks/fetchUsers';