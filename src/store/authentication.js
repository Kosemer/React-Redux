import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
    isAuthenticated: false, 
}

const authSlices = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login (state) {
            state.isAuthenticated = true
        },
        loguot (state) {
            state.isAuthenticated = false
        }
    }
})

export const authActions = authSlices.actions;

export default authSlices.reducer;