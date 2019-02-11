import axios from "axios"
import { apiUrl } from "../config/apiUrl";

export const FETCH_POSTS = "FETCH_POSTS"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED"
export const FETCH_POST = "FETCH_POST"
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS"
export const FETCH_POST_FAILED = "FETCH_POST_FAILED"
export const CREATE_POST = "CREATE_POST"
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS"
export const CREATE_POST_FAILED = "CREATE_POST_FAILED"
export const UPDATE_POST = "UPDATE_POST"
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS"
export const UPDATE_POST_FAILED = "UPDATE_POST_FAILED"
export const DELETE_POST = "DELETE_POST"
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS"
export const DELETE_POST_FAILED = "DELETE_POST_FAILED"

function requestFetchPosts() {
    return {
        type: FETCH_POSTS,
    }
}
function requestFetchPostsByUserId(userId) {
    return {
        type: FETCH_POSTS,
        userId
    }
}
function successFetchPosts(posts) {
    return {
        type: FETCH_POSTS_SUCCESS,
        posts
    }
}
function failureFetchPosts(error) {
    return {
        type: FETCH_POSTS_FAILED,
        error
    }
}
function requestFetchPost(id) {
    return {
        type: FETCH_POST,
        id
    }
}
function successFetchPost(post) {
    return {
        type: FETCH_POST_SUCCESS,
        post
    }
}
function failureFetchPost(error) {
    return {
        type: FETCH_POST_FAILED,
        error
    }
}
function requestCreatePost(data) {
    return {
        type: CREATE_POST,
        data
    }
}
function successCreatePost(post) {
    return {
        type: CREATE_POST_SUCCESS,
        post
    }
}
function failureCreatePost(error) {
    return {
        type: CREATE_POST_FAILED,
        error
    }
}
function requestUpdatePost(id, data) {
    return {
        type: UPDATE_POST,
        id,
        data
    }
}
function successUpdatePost(post) {
    return {
        type: UPDATE_POST_SUCCESS,
        post
    }
}
function failureUpdatePost(error) {
    return {
        type: UPDATE_POST_FAILED,
        error
    }
}
function requestDeletePost(id) {
    return {
        type: DELETE_POST,
        id,
    }
}
function successDeletePost(post) {
    return {
        type: DELETE_POST_SUCCESS,
    }
}
function failureDeletePost(error) {
    return {
        type: DELETE_POST_FAILED,
        error
    }
}

export function fetchPosts(){
    return dispatch => {
        dispatch(requestFetchPosts())
        axios.get(apiUrl.posts)
			.then(response => dispatch(successFetchPosts(response.data)))
			.catch(_ => dispatch(failureFetchPosts("Fetch posts failed!")))
    }
}

export function fetchPostsByUserId(id){
    return dispatch => {
        dispatch(requestFetchPostsByUserId(id))
        axios.get(`${apiUrl.posts}?userId=${id}`)
			.then(response => dispatch(successFetchPosts(response.data)))
			.catch(_ => dispatch(failureFetchPosts("Fetch posts failed!")))
    }
}

export function fetchPost(id){
    return dispatch => {
        dispatch(requestFetchPost(id))
        axios.get(`${apiUrl.posts}/${id}`)
			.then(response => dispatch(successFetchPost(response.data)))
			.catch(_ => dispatch(failureFetchPost("Fetch post failed!")))
    }
}

export function createPost(data){
    return dispatch => {
        dispatch(requestCreatePost(data))
        axios.post(apiUrl.posts,data)
			.then(response => dispatch(successCreatePost(response.data)))
			.catch(_ => dispatch(failureCreatePost("Create post failed!")))
    }
}

export function updatePost(id, data){
    return dispatch => {
        dispatch(requestUpdatePost(id, data))
        axios.put(`${apiUrl.posts}/${id}`,data)
			.then(response => dispatch(successUpdatePost(response.data)))
			.catch(_ => dispatch(failureUpdatePost("Update post failed!")))
    }
}

export function deletePost(id){
    return dispatch => {
        dispatch(requestDeletePost(id ))
        axios.delete(`${apiUrl.posts}/${id}`)
			.then(_ => dispatch(successDeletePost()))
			.catch(_ => dispatch(failureDeletePost("Delete post failed!")))
    }
}