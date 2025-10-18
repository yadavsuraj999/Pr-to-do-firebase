import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { toast } from "react-toastify";


export const addToDo = createAsyncThunk(
    "todo/addToDo",
    async ({ input, uid }, { dispatch }) => {
        try {
            await addDoc(collection(db, "tasks", uid, "userTasks"), input);
            dispatch(featchTodo(uid));
        } catch (error) {
            toast.error(error.message);
        }
    }
);

export const featchTodo = createAsyncThunk("todo/featch", async (uid) => {
    try {
        const querySnapshot = await getDocs(collection(db, "tasks", uid, "userTasks"));
        const taskData = querySnapshot.docs.map((task) => ({
            id: task.id,
            ...task.data()
        }));
        return taskData;
    } catch (error) {
        toast.error(error.message);
    }
});

export const deleteTodo = createAsyncThunk(
    "todo/deleteTodo",
    async ({ uid, deleteTask }, { dispatch }) => {
        try {
            await deleteDoc(doc(db, "tasks", uid, "userTasks", deleteTask));
            dispatch(featchTodo(uid));
            toast.success("Task deleted successfully");
        } catch (error) {
            toast.error(error.message);
        }
    }
);

export const editTodo = createAsyncThunk(
    "todo/editTodo",
    async ({ uid, id, updatedTask }, { dispatch }) => {
        try {
            await setDoc(doc(db, "tasks", uid, "userTasks", id), updatedTask);
            dispatch(featchTodo(uid));

            if (updatedTask.status === "complete") {
                toast.success("Task marked as complete!");
            } else {
                toast.success("Task updated successfully");
            }

        } catch (error) {
            toast.error(error.message);
        }
    }
);



const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoArr: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(featchTodo.fulfilled, (state, action) => {
            state.todoArr = action.payload;
        });
    },
});

export default todoSlice.reducer;
