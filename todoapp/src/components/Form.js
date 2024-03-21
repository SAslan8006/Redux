import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAsync } from './redux/todos/todoSlice';
import Loading from './Loading';
import Error from './Error';
function Form() {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const { addNewTodoIsLoading, addNewTodoError } = useSelector(state => state.todos)
    const handleSubmit = async (e) => {
        if (title.trim() === "") { return }
        e.preventDefault()
        await dispatch(addTodoAsync({ title }))
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <input
                disabled={addNewTodoIsLoading}
                className='new-todo'
                placeholder="What needs to be done?"
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            {addNewTodoIsLoading && <Loading />}
            {addNewTodoError && <Error message={addNewTodoError} />}
        </form>
    )
}

export default Form