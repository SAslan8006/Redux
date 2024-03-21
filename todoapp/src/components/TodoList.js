import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync, toggleTodoAsync, removeItemAsync } from './redux/todos/services';
import Loading from './Loading';
import Error from './Error';
import { selectFilteredTodos } from './redux/todos/todoSlice';
function TodoList() {
    const dispatch = useDispatch();
    const filteredTodos = useSelector(selectFilteredTodos)
    const isLoading = useSelector((state) => state.todos.isLoading);
    const error = useSelector((state) => state.todos.error);
    // console.log("state durumu : ", isLoading);
    const handleToggle = async (id, completed) => {
        await dispatch(toggleTodoAsync({ id, data: { completed } }));
    };

    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);

    const handleDestroy = async (id) => {
        if (window.confirm("Are you sure ?")) {
            console.log(id);
            await dispatch(removeItemAsync(id));
        }
    };

    return (
        <ul className="todo-list">
            {isLoading && <Loading />}
            {error && <Error message={error} />}
            {filteredTodos.map((item) => (
                <li key={item.id} className={item.completed ? "completed" : ""}>
                    <div className="view">
                        <input
                            className="toggle"
                            type="checkbox"
                            // onChange={() => dispatch(toggle({ id: item.id }))}
                            onChange={() => handleToggle(item.id, !item.completed)}
                            checked={item.completed}
                        />
                        <label> {item.title}</label>
                        <button
                            className="destroy"
                            onClick={() => handleDestroy(item.id)}
                        ></button>
                    </div>
                </li>
            ))}
        </ul >
    )
}

export default TodoList