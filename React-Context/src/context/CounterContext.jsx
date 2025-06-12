import React, { Children, createContext, useState } from 'react'

export const MyCounterContext = createContext()

function CounterContext({ children }) {

    const [no, setNo] = useState(0)

    const Increment = () => {
        setNo(no + 1)
    }

    const Decrement = () => {
        setNo(no + 1)
    }

    return (
        <div>
            <MyCounterContext.Provider value={{ no, Increment, Decrement }}>
                {children}
            </MyCounterContext.Provider>
        </div>
    )
}

export default CounterContext
