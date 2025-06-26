const addtask = (data) => {
    return {
        type: "ADD_TASK",
        payload: data
    }
}

const delettask = (id) => {
    return {
        type: "DELETE_TASK",
        payload: id
    }
}

export { addtask, delettask }