import { 
    FETCH_COMMENTS, 
    FETCH_COMMENTS_SUCCESS, 
    FETCH_COMMENTS_FAILED,
    FETCH_COMMENT,
    FETCH_COMMENT_SUCCESS,
    FETCH_COMMENT_FAILED,
    CREATE_COMMENT,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAILED,
    UPDATE_COMMENT,
    UPDATE_COMMENT_SUCCESS,
    UPDATE_COMMENT_FAILED,
    DELETE_COMMENT,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILED
} from '../actions/commentActions'

let initialStateComments = {
    loading: false,
    finish: false,
    comments: [],
    error: ''
};

const commentReducer = (state = initialStateComments, action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                loading: true,
            }
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: [...state.comments, ...action.comments],
                loading: false,
                finish: true
            }
        case FETCH_COMMENTS_FAILED:
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

export default commentReducer