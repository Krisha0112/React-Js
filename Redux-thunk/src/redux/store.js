import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/indexReducre";
import { thunk } from "redux-thunk";

let store = createStore (rootReducer, applyMiddleware(thunk))

export default store