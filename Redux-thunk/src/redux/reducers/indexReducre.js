import { combineReducers } from "redux";
import postReducer from "./postReducer";

let rootReducer = combineReducers({
    posts : postReducer
})

export default rootReducer
