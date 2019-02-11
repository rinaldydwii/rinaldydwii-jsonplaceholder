import { 
    FETCH_COMMENTS_BY_ID, 
    FETCH_COMMENTS_BY_ID_SUCCESS, 
    FETCH_COMMENTS_BY_ID_FAILED,
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
    postId: null,
    loading: false,
    finish: false,
    comments: [],
    error: ''
};

const commentsReducer = (state = initialStateComments, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_BY_ID:
            return {
                ...state,
                loading: true,
            }
        case FETCH_COMMENTS_BY_ID_SUCCESS:
            return {
                ...state,
                comments: [...state.comments, ...action.comments],
                loading: false,
                finish: true
            }
        case FETCH_COMMENTS_BY_ID_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
                finish: true
            }
        case CREATE_COMMENT:
            return {
                ...state,
                data: action.data,
                loading: true
            }
        case CREATE_COMMENT_SUCCESS:
            state.comments.push(action.comment)
            return {
                ...state,
                loading: false,
                finish: true
            }
        case CREATE_COMMENT_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
                finish: true
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                data: action.data,
                loading: true
            }
        case UPDATE_COMMENT_SUCCESS:
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if (comment.id === action.comment.id)
                        return action.comment
                    return comment
                }),
                loading: false,
                finish: true
            }
        case UPDATE_COMMENT_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
                finish: true
            }
        case DELETE_COMMENT:
            return {
                ...state,
                index: action.index,
                loading: true
            }
        case DELETE_COMMENT_SUCCESS:
            state.comments.splice(state.index, 1);
            return {
                ...state,
                comments: state.comments,
                loading: false,
                finish: true
            }
        case DELETE_COMMENT_FAILED:
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

export default commentsReducer