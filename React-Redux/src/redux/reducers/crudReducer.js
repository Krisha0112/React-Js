
let initialize = {
    user: JSON.parse(localStorage.getItem('user')) || [],
    single: null
}

let CrudReducer = (state = initialize, action) => {

    switch (action.type) {
        case 'add':
            let oldrecord = [...state.user, action.payload]
            localStorage.setItem('user', JSON.stringify(oldrecord))

            return {
                ...state,
                user: oldrecord
            }
        case 'delete':

            let deleteuser = state.user.filter(val => val.id != action.payload)
            localStorage.setItem('user', JSON.stringify(deleteuser))

            return {
                ...state,
                user: deleteuser
            }

        case 'edit':
            let single = state.user.find(val => val.id == action.payload)
            return {
                ...state,
                single: single
            }

        case 'Update':
            const updatedUsers = state.user.map((val) => {
                if (val.id == action.payload.id) {
                    val.name = action.payload.name;
                    val.email = action.payload.email;
                    val.password = action.payload.password;
                }
                return val
            })

            localStorage.setItem('user', JSON.stringify(updatedUsers))
            return {
                ...state,
                user: updatedUsers
            }




        default:
            return state
    }
}
export default CrudReducer