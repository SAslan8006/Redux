
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios"
export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
    const res = await axios("http://localhost:7000/todos");
    return res.data
});

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        activeFilter: "all",
    },
    reducers: {
        // addTodo1: (state, action) => {
        //     state.items.push(action.payload)
        // },
        addTodo: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            prepare: ({ title }) => {
                return {
                    payload: {
                        id: nanoid(),
                        completed: false,
                        title,
                    }
                }
            }
        },
        toggle: (state, action) => {
            const { id } = action.payload;
            const item = state.items.find((item) => item.id === id);
            item.completed = !item.completed;
        },
        destroy: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered;

        },
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
        clearCompleted: (state) => {
            const filtered = state.items.filter(item => item.completed === false);
            state.items = filtered;
        }
    },
    extraReducers(builder) { // ExtraReducers kısmı Güncellenmiş versiyonudur
        builder
            .addCase(getTodosAsync.pending, (state) => {
                state.isLoading = true; //Pending yani bekleme durumunda loadin true haline getiriyor
            })
            .addCase(getTodosAsync.fulfilled, (state, action) => {
                state.items = action.payload; // FulFilled durumu olumlu durumunda items'a veri atıyor
                state.isLoading = false; // loading false yapıyor
            })
            .addCase(getTodosAsync.rejected, (state, action) => {
                state.isLoading = false; // rejected Durumunda loading false yapıyor
                state.error = action.error.message; // rejected durumunda hata mesajı atıyor
            })
    }
})

export const selectTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state) => {
    return state.todos.activeFilter === "all" ?
        state.todos.items :
        state.todos.items.filter((todo) => state.todos.activeFilter === "active"
            ? todo.completed === false
            : todo.completed === true
        );
};
export const selectActiveFilter = (state) => state.todos.activeFilter
export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted, } = todosSlice.actions
export default todosSlice.reducer