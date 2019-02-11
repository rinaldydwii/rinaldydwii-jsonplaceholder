import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import {userReducer, usersReducer} from './reducers/userReducers'
import {postReducer, postsReducer} from './reducers/postReducers'
import commentsReducer from './reducers/commentReducers'
import {albumReducer, albumsReducer} from './reducers/albumReducers'
import {photoReducer, photosReducer} from './reducers/photoReducers'

const loggerMiddleware = createLogger();
const reducers = combineReducers({
    userReducer, 
    usersReducer,
    postReducer,
    postsReducer,
    commentsReducer,
    albumReducer,
    albumsReducer,
    photoReducer,
    photosReducer
});

export default function configureStore() {
    return createStore(
        reducers,
        // applyMiddleware(thunkMiddleware)
        applyMiddleware(loggerMiddleware, thunkMiddleware)
    );
};