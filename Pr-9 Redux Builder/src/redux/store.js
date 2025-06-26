import { legacy_createStore as createStore } from 'redux';
import rootReducer from './Reducers/indexReducer';

const store = createStore(rootReducer);

export default store;

