const initialState = {
  task: JSON.parse(localStorage.getItem("task")) || []
};

const keepReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const alltask = [...state.task, action.payload];
      localStorage.setItem("task", JSON.stringify(alltask));
      return { ...state, task: alltask };

    case "DELETE_TASK":
      const deletetask = state.task.filter(val => val.id !== action.payload);
      localStorage.setItem("task", JSON.stringify(deletetask));
      return { ...state, task: deletetask };

    default:
      return state;
  }
};

export default keepReducer;
