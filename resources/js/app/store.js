import { configureStore } from "@reduxjs/toolkit";
import theme from "@/fitures/theme";

const store = configureStore({
    reducer : {
        "theme" : theme
    }
})

export default store ;