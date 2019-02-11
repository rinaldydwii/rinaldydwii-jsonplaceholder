import { 
    FETCH_POSTS, 
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_FAILED,
    FETCH_POST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILED,
    CREATE_POST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILED,
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILED,
    DELETE_POST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILED
} from '../actions/postActions'


let initialStatePosts = {
    loading: false,
    finish: false,
    posts: [],
    error: ''
};

const postReducer = (state = initialStatePosts, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                loading: true,
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: [...state.posts, ...action.posts],
                loading: false,
                finish: true
            }
        case FETCH_POSTS_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
                finish: true
            }
        default:
            return {
                ...state
            }
    }
}

export default postReducer