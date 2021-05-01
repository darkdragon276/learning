import { combineReducers, createStore } from 'redux'
import DetailReducer from './reducers/DetailReducer';
import FormReducer from './reducers/FormReducer';

const rootReducer = combineReducers({
    detail: DetailReducer,
    form: FormReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subcribe();