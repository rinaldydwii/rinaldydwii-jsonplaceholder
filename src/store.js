import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import userReducers from './reducers/userReducers'

const loggerMiddleware = createLogger();
const reducers = combineReducers({userReducers});

export default function configureStore() {
    return createStore(
        reducers,
        // applyMiddleware(thunkMiddleware)
        applyMiddleware(loggerMiddleware, thunkMiddleware)
    );
};