import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reduser/Reduser";

const store=configureStore({
    reducer:rootReducer
})
export default store