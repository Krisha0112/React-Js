import { combineReducers } from "redux";
import recipeReducer from "./recipyReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  recipeData: recipeReducer,
  userData: userReducer,
});

export default rootReducer;
