import { combineReducers } from "redux";
import CrudReducers from "./crudReducer";

const rootReducer = combineReducers({
    crud: CrudReducers
})

export default rootReducer;