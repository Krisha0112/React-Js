const initialState = {
  recipes: [],
  error: null,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getRecipes":
      return { ...state, recipes: action.payload, error: null };
    case "recipeErr":
      return { ...state, recipes: [], error: action.payload };
    default:
      return state;
  }
};

export default recipeReducer;
