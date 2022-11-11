import { createSlice } from "@reduxjs/toolkit";

const theme = createSlice({
    name: "theme",
    initialState: {
        isDark: window.matchMedia("(prefers-color-scheme: dark)").matches
    },
    reducers: {
        toggle: state => {
            state.isDark = !state.isDark;
        },
    },
});

export const {toggle} = theme.actions;
export default theme.reducer ;