import { createSlice } from "@reduxjs/toolkit";

export interface SystemState {

}

//Load redux initial data from localStorage
if (typeof window !== 'undefined') {

}

//Construct initial state
const initialState: SystemState = {

}

//Create slice for update state function
export const systemSlice = createSlice({
    name: "system",
    initialState,
    reducers: {
    }

})

export const {

} = systemSlice.actions;

export default systemSlice.reducer;
