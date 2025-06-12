import React, { useContext } from 'react'
import { MyCounterContext } from './context/CounterContext'

function Counter() {

    const { no, Increment, Decrement } = useContext(MyCounterContext)


    return (
        <div align="center">
            <h1>Counter</h1>
            <h2>Count :- {no}</h2>
            <button onClick={() => Increment()}>+</button>
            <button onClick={() => Decrement()}>-</button>
        </div>
    )
}

export default Counter
