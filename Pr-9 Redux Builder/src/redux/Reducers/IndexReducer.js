import { combineReducers } from 'redux';
import keepReducer from './keepReducer';

const rootReducer = combineReducers({
  keep: keepReducer
});

export default rootReducer;
