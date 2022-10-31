import { createSlice } from "@reduxjs/toolkit";

const initialValid = {
    isValidate: false
}

const validateIinput = createSlice({
    name: 'validateInput',
    initialState: initialValid,
    reducers: {
        valid (state) {
            state.isValidate = true
        },
        notValid (state) {
            state.isValidate = false
        }
    }
})

export const validActions = validateIinput.actions;

export default validateIinput.reducer;