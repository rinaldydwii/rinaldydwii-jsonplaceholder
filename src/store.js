import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import {userReducer, usersReducer} from './reducers/userReducers'
import postsReducer from './reducers/postReducers'
import commentsReducer from './reducers/commentReducers'
import albumsReducer from './reducers/albumReducers'
import photosReducer from './reducers/photoReducers'

const loggerMiddleware = createLogger();
const reducers = combineReducers({
    userReducer, 
    usersReducer,
    postsReducer,
    commentsReducer,
    albumsReducer,
    photosReducer
});

export default function configureStore() {
    return createStore(
        reducers,
        // applyMiddleware(thunkMiddleware)
        applyMiddleware(loggerMiddleware, thunkMiddleware)
    );
};