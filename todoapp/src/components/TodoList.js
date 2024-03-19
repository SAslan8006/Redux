import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggle, destroy } from './redux/todos/todoSlice';
let filtered = [];
function TodoList() {
    const dispatch = useDispatch();
    const { items, activeFilter } = useSelector((state) => state.todos)


    const handleDestroy = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(destroy(id))
        }
    }
    filtered = items;
    if (activeFilter !== "all") {
        filtered = items.filter((todo) =>
            activeFilter === "active" ?
                todo.completed === false && todo :
                todo.completed === true && todo)
    }
    return (
        <ul className="todo-list">
            {filtered.map((item) => (
                <li key={item.id}>
                    <div className={item.completed ? "completed" : "view"}>
                        <input
                            className="toggle"
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => dispatch(toggle({ id: item.id }))}
                        />
                        <label>{item.title}</label>
                        <button className="destroy" onClick={() => handleDestroy(item.id)}></button>
                    </div>
                </li>
            ))
            }
        </ul >
    )
}

export default TodoList