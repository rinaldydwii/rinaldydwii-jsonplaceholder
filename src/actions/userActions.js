import axios from "axios"
import { apiUrl } from "../config/apiUrl";

export const FETCH_USERS = "FETCH_USERS"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED"
export const FETCH_USER = "FETCH_USER"
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_USER_FAILED = "FETCH_USER_FAILED"

function requestFetchUsers() {
    return {
        type: FETCH_USERS,
    }
}
function successFetchUsers(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        users
    }
}
function failureFetchUsers(error) {
    return {
        type: FETCH_USERS_FAILED,
        error
    }
}
function requestFetchUser(id) {
    return {
        type: FETCH_USER,
        id
    }
}
function successFetchUser(user) {
    return {
        type: FETCH_USER_SUCCESS,
        user
    }
}
function failureFetchUser(error) {
    return {
        type: FETCH_USER_FAILED,
        error
    }
}

export function fetchUsers(){
    return dispatch => {
        dispatch(requestFetchUsers())
        axios.get(apiUrl.users)
			.then(response => dispatch(successFetchUsers(response.data)))
			.catch(_ => dispatch(failureFetchUsers("Fetch users failed!")))
    }
}

export function fetchUser(id){
    return dispatch => {
        dispatch(requestFetchUser(id))
        axios.get(`${apiUrl.users}/${id}`)
			.then(response => dispatch(successFetchUser(response.data)))
			.catch(_ => dispatch(failureFetchUser("Fetch user failed!")))
    }
}