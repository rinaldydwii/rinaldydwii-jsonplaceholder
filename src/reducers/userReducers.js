import { 
    FETCH_USERS, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILED,
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
} from '../actions/userActions'

let initialStateUsers = {
    loading: false,
    finish: false,
    users: [],
    error: ''
};

export const usersReducer = (state = initialStateUsers, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.users,
                loading: false,
                finish: true
            }
        case FETCH_USERS_FAILED:
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

let initialStateUser = {
    loading: false,
    finish: false,
    user: {},
    error: ''
};

export const userReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                loading: false,
                finish: true
            }
        case FETCH_USER_FAILED:
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