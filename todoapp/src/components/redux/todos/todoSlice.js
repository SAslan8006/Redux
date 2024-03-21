
import { createSlice } from '@reduxjs/toolkit';
import { addTodoAsync, getTodosAsync, removeItemAsync, toggleTodoAsync } from './services';

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;


export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        activeFilter: localStorage.getItem('activeFilter'),
        addNewTodo: {
            isLoading: false,
            error: null
        }
    },
    reducers: {
        // // addTodo1: (state, action) => {
        // //     state.items.push(action.payload)
        // // },
        // addTodo: {
        //     reducer: (state, action) => {
        //         state.items.push(action.payload)
        //     },
        //     prepare: ({ title }) => {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 completed: false,
        //                 title,
        //             }
        //         }
        //     }
        // },
        // toggle: (state, action) => {
        //     const { id } = action.payload;
        //     const item = state.items.find((item) => item.id === id);
        //     item.completed = !item.completed;
        // },
        // destroy: (state, action) => {
        //     const id = action.payload;
        //     const filtered = state.items.filter((item) => item.id !== id);
        //     state.items = filtered;

        // },
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
        clearCompleted: (state) => {
            const filtered = state.items.filter(item => item.completed === false);
            state.items = filtered;
        }
    },
    extraReducers(builder) { // ExtraReducers kısmı Güncellenmiş versiyonudur
        // Add reducers for additional action types here
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
            //Add Todo Reducer
            .addCase(addTodoAsync.fulfilled, (state, action) => {
                state.addNewTodo.isLoading = false;
                state.items.push(action.payload);
            })
            .addCase(addTodoAsync.rejected, (state, action) => {
                state.addNewTodo.isLoading = false;
                state.addNewTodo.error = action.error.message
            })
            .addCase(addTodoAsync.pending, (state) => {
                state.addNewTodo.isLoading = true;
            })
            //Toggle Todo Reducer
            .addCase(toggleTodoAsync.fulfilled, (state, action) => {
                const { id, completed } = action.payload
                const index = state.items.findIndex((item) => item.id === id);
                state.items[index].completed = completed
            })
            //Remove Todo Reducer
            .addCase(removeItemAsync.fulfilled, (state, action) => {
                const id = action.payload
                // const filtred = state.items.filter((item) => item.id !== id);
                // state.items = filtred;
                const index = state.items.findIndex((item) => item.id === id);
                state.items.splice(index, 1)
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
export const { changeActiveFilter, clearCompleted, } = todosSlice.actions
export default todosSlice.reducer