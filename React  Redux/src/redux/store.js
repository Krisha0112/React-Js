import { createStore } from "redux";
import rootReducer from "./reducers/indexReducer";

let store = createStore(rootReducer)

export default store