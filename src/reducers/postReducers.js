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

export const postsReducer = (state = initialStatePosts, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                loading: true,
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts,
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
        case CREATE_POST:
            return {
                ...state,
                data: action.data,
                loading: true
            }
        case CREATE_POST_SUCCESS:
            state.posts.push(action.post)
            return {
                ...state,
                loading: false,
                finish: true
            }
        case CREATE_POST_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
                finish: true
            }
        case DELETE_POST:
            return {
                ...state,
                id: action.id,
                loading: true,
                finish: false
            }
        case DELETE_POST_SUCCESS:
            const index = state.posts.findIndex((post) => post.id === state.id)
            state.posts.splice(index, 1);
            return {
                ...state,
                posts: state.posts,
                loading: false,
                finish: true
            }
        case DELETE_POST_FAILED:
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

let initialStatePost = {
    loading: false,
    finish: false,
    post: {},
    error: ''
};

export const postReducer = (state = initialStatePost, action) => {
    switch (action.type) {
        case FETCH_POST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                post: action.post,
                loading: false,
                finish: true
            }
        case FETCH_POST_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
                finish: true
            }
        case UPDATE_POST:
            return {
                ...state,
                data: action.data,
                loading: true
            }
        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                post: state.post.map(post => {
                    if (post.id === action.post.id)
                        return action.post
                    return post
                }),
                loading: false,
                finish: true
            }
        case UPDATE_POST_FAILED:
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