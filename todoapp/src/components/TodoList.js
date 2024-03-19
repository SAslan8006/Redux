import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './redux/todos/todoSlice';

function TodoList() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.todos.items)
    return (
        <ul className="todo-list">
            {items.map((item) => (
                <li key={item.id}>
                    <div className={item.completed ? "completed" : "view"}>
                        <input
                            className="toggle"
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => dispatch(toggle({ id: item.id }))}
                        />
                        <label>{item.title}</label>
                        <button className="destroy"></button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TodoList