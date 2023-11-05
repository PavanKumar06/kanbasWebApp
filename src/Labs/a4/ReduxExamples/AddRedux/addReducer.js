import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sum: 0
}

const addSlice = createSlice({
    name: "add",
    initialState: initialState,
    reducers: {
        addition: (state, action) => {
            state.sum = action.payload.a + action.payload.b;
        }
    }
});

export const { addition } = addSlice.actions;
export default addSlice.reducer;