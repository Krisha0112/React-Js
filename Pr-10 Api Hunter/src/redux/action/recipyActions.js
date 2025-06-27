import axios from "axios";

export const getRecipes = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      dispatch({ type: "getRecipes", payload: res.data.recipes });
    } catch (err) {
      dispatch({ type: "recipeErr", payload: err.message });
    }
  };
};
