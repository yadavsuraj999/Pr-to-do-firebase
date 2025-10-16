import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";


export const logIn = createAsyncThunk("auth/logIn", async (input) => {
    try {
        const person = await signInWithEmailAndPassword(auth, input.email, input.password)
        return person.user
    } catch (error) {
        if (error.code === "auth/user-not-found") {
            toast.error("User not found. Please sign up first.")
        } else if (error.code === "auth/invalid-credential") {
            toast.error("Incorrect email or password.")
        } else {
            toast.error(error.message);
        }
    }
})

export const googleLogIn = createAsyncThunk("auth/googleLogIn", async () => {
    try {
        await signInWithPopup(auth)
    } catch (error) {
        if (error.code === "auth/user-not-found") {
            toast.error("User not found. Please sign up first.")
        } else if (error.code === "auth/invalid-credential") {
            toast.error("Incorrect email or password.")
        } else {
            toast.error(error.message);
        }
    }
})

export const authSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        handleLogOut: (state, action) => {
            signOut(auth)
            state.user = null
        }
    },

    extraReducers: (builder) => {
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload
        })
    },

    extraReducers: (builder) => {
        builder.addCase(googleLogIn.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})
export const { setUser, handleLogOut } = authSlice.actions;
export default authSlice.reducer
