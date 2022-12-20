import { createSlice } from "@reduxjs/toolkit";

export const videoLoadSlice = createSlice({
    name: 'videoLoad',
    initialState: {
        value: 0
    },
    reducers : {
        videoLoadHome: state => {
            state.value +=1
        }
    }
})

export default videoLoadSlice.reducer