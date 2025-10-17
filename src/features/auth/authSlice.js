import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, provider } from "../../firebase/config";


export const logIn = createAsyncThunk("auth/logIn", async (input) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, input.email, input.password)
        return {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        }
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
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        return {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        };
    } catch (error) {
        if (error.code === "auth/user-not-found") {
            toast.error("User not found. Please sign up first.");
        } else if (error.code === "auth/invalid-credential") {
            toast.error("Incorrect email or password.");
        } else {
            toast.error(error.message);
        }
    }
});


export const authSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        handleLogOut: (state) => {
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
