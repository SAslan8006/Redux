import React from 'react'
import { useSelector } from 'react-redux';

function Counter() {
    const counterValue = useSelector(state => state.counter.value)
    return (
        <div><h1>{counterValue}</h1></div>
    )
}

export default Counter