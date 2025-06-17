let initialState = {
    users: [],
    err: null
}

const CrudReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'adduser': 
            return state;

        default:
            return state;
    }
}

export default CrudReducers;