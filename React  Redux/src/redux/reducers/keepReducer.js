const initialState = {
    task: JSON.parse(localStorage.getItem("task")) || []
}

const keepreducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            let alltask = [...state.task, action.payload];
            localStorage.setItem("task", JSON.stringify(alltask));

            return {
                ...state,
                task: alltask
            }

        case "DELETE_TASK":
            const delettask = state.task.filter((val) => val.id !== action.payload)
            localStorage.setItem("task", JSON.stringify(delettask));
            return {
                ...state,
                task: delettask
            }

        default:
            return state
    }

}

export default keepreducer