import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/fetchUsers";

const usersSlice = createSlice( {
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUser.pending, (state,action) => {
           state.isLoading = true; 
        });
        builder.addCase(fetchUser.fulfilled,(state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUser.rejected,(state,action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
})


export const usersReducer = usersSlice.reducer;