import { useState } from 'react'

function CounterHoc(Wrappedcomponent) {

    return () => {
        const [no, setNo] = useState(0);

        const [users, setUsers] = useState([
            { name:"John", phone: 1234658},
            { name:"Jane", phone: 15843541},
            { name:"Doe", phone : 5487451204},
        ])

        const [allusers , setAllUsers] = useState([])

        const showusers = () => {
            setAllUsers(users)
        }

        const increment = () => {
            setNo(no + 1)
        }

        const decrement = () => {
            setNo(no - 1)
        }

        return(
            <>
                <Wrappedcomponent 
                    cnt = {no}
                    incBtn = {increment}
                    decBtn = {decrement}
                    showuserBtn = {showusers}
                    allusers = {allusers}
                />
               </>
        )
    }
}

export default CounterHoc
