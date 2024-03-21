import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggle, destroy, selectFilteredTodos, getTodosAsync } from './redux/todos/todoSlice';
import Loading from './Loading';
import Error from './Error';
function TodoList() {
    const dispatch = useDispatch();
    const filteredItems = useSelector(selectFilteredTodos)
    const { isLoading, error } = useSelector(state => state.todos)
    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch])

    const handleDestroy = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(destroy(id))
        }
    }

    return (
        <ul className="todo-list">
            {isLoading && <Loading />}
            {error && <Error message={error} />}
            {filteredItems.map((item) => (
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