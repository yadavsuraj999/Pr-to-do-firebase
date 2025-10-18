import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import todoReducer from "../features/todo/todoSlice";


export const todostore = configureStore({
    reducer: {
        user: authReducer,
        todo: todoReducer
    },
})