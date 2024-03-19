
import { createSlice } from '@reduxjs/toolkit';
export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [
            {
                id: "1",
                title: "Learn JavaScript",
                completed: true,
            },
            {
                id: "2",
                title: "Learn React",
                completed: false,
            },
        ],
    },
    reducers: {
        addTodo: (state, action) => {

            state.items.push(action.payload)
        }
    }
})
export const { addTodo } = todosSlice.actions
export default todosSlice.reducer