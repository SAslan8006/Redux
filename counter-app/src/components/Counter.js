import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, decrementByAmount, increment, incrementByAmount } from '../redux/counter/counterSlice';

function Counter() {
    const [amount, setAmount] = useState(0);
    const countValue = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div className="container">
            <h1>Counter</h1>
            <div>
                <div className="count-content">
                    <h1 className="counterNum">{countValue}</h1>
                </div>
                <button className="btn btn-increment"
                    onClick={() => dispatch(decrement())} >
                    Decrement
                </button>
                <button className="btn btn-decrement"
                    onClick={() => dispatch(increment())} >
                    Increment
                </button>
                <br />
                <label htmlFor="number" className="count-value">
                    Amount :
                </label>
                <input
                    type="number"
                    name="number"
                    className="nums"
                    defaultValue={0}
                    onChange={(event) => setAmount(Number(event.target.value))}
                />
                <div>
                    <button
                        className="btn btn-inc-by-amount"
                        onClick={() => dispatch(incrementByAmount(amount))}
                    >
                        Increment By Amount
                    </button>
                    <button
                        className="btn btn-inc-by-amount"
                        onClick={() => dispatch(decrementByAmount(amount))}
                    >
                        Decrement By Amount
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Counter