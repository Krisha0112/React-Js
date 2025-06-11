import { combineReducers } from "redux";
import Counter from "./counterReducer";
import CrudReducer from "./crudReducer";

let rootReducer = combineReducers({
    count: Counter,
    crud:CrudReducer
})

export default rootReducer