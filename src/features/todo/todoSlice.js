import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const featchToDo = createAsyncThunk("todo/featchToDo")

const todoSlice = createSlice({
    name: "",
    initialState: [],
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase()
    }
})