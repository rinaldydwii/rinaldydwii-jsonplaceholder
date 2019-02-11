import axios from "axios"
import { apiUrl } from "../config/apiUrl";

export const FETCH_COMMENTS = "FETCH_COMMENTS"
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS"
export const FETCH_COMMENTS_FAILED = "FETCH_COMMENTS_FAILED"
export const CREATE_COMMENT = "CREATE_COMMENT"
export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS"
export const CREATE_COMMENT_FAILED = "CREATE_COMMENT_FAILED"
export const UPDATE_COMMENT = "UPDATE_COMMENT"
export const UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS"
export const UPDATE_COMMENT_FAILED = "UPDATE_COMMENT_FAILED"
export const DELETE_COMMENT = "DELETE_COMMENT"
export const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS"
export const DELETE_COMMENT_FAILED = "DELETE_COMMENT_FAILED"

function requestFetchCommentsById(postId) {
    return {
        type: FETCH_COMMENTS,
        postId
    }
}
function successFetchComments(comments) {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        comments
    }
}
function failureFetchComments(error) {
    return {
        type: FETCH_COMMENTS_FAILED,
        error
    }
}
function requestCreateComment(data) {
    return {
        type: CREATE_COMMENT,
        data
    }
}
function successCreateComment(comment) {
    return {
        type: CREATE_COMMENT_SUCCESS,
        comment
    }
}
function failureCreateComment(error) {
    return {
        type: CREATE_COMMENT_FAILED,
        error
    }
}
function requestUpdateComment(id, data) {
    return {
        type: UPDATE_COMMENT,
        id,
        data
    }
}
function successUpdateComment(comment) {
    return {
        type: UPDATE_COMMENT_SUCCESS,
        comment
    }
}
function failureUpdateComment(error) {
    return {
        type: UPDATE_COMMENT_FAILED,
        error
    }
}
function requestDeleteComment(id) {
    return {
        type: DELETE_COMMENT,
        id,
    }
}
function successDeleteComment(comment) {
    return {
        type: DELETE_COMMENT_SUCCESS,
    }
}
function failureDeleteComment(error) {
    return {
        type: DELETE_COMMENT_FAILED,
        error
    }
}

export function fetchCommentsById(id){
    return dispatch => {
        dispatch(requestFetchCommentsById(id))
        axios.get(`${apiUrl.comments}?postId=${id}`)
			.then(response => dispatch(successFetchComments(response.data)))
			.catch(_ => dispatch(failureFetchComments("Fetch comments failed!")))
    }
}

export function createComment(data){
    return dispatch => {
        dispatch(requestCreateComment(data))
        axios.post(apiUrl.comments,data)
			.then(response => dispatch(successCreateComment(response.data)))
			.catch(_ => dispatch(failureCreateComment("Create comment failed!")))
    }
}

export function updateComment(id, data){
    return dispatch => {
        dispatch(requestUpdateComment(id, data))
        axios.put(`${apiUrl.comments}/${id}`,data)
			.then(response => dispatch(successUpdateComment(response.data)))
			.catch(_ => dispatch(failureUpdateComment("Update comment failed!")))
    }
}

export function deleteComment(id){
    return dispatch => {
        dispatch(requestDeleteComment(id ))
        axios.delete(`${apiUrl.comments}/${id}`)
			.then(response => dispatch(successDeleteComment(response.data)))
			.catch(_ => dispatch(failureDeleteComment("Delete comment failed!")))
    }
}