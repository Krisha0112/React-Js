let initialState = {
    post : []
}
const postReducre = (state = initialState.action) => {
    switch(action.type) {
        case 'getpost' :
            return state

        default: 
            return state
    }
}

export default postReducre