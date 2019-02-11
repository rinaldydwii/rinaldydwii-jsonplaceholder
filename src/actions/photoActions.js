import axios from "axios"
import { apiUrl } from "../config/apiUrl";

export const FETCH_PHOTOS = "FETCH_PHOTOS"
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS"
export const FETCH_PHOTOS_FAILED = "FETCH_PHOTOS_FAILED"
export const FETCH_PHOTO = "FETCH_PHOTO"
export const FETCH_PHOTO_SUCCESS = "FETCH_PHOTO_SUCCESS"
export const FETCH_PHOTO_FAILED = "FETCH_PHOTO_FAILED"

function requestFetchPhotos() {
    return {
        type: FETCH_PHOTOS,
    }
}
function requestFetchPhotosByAlbumId(albumId) {
    return {
        type: FETCH_PHOTOS,
        albumId
    }
}
function successFetchPhotos(photos) {
    return {
        type: FETCH_PHOTOS_SUCCESS,
        photos
    }
}
function failureFetchPhotos(error) {
    return {
        type: FETCH_PHOTOS_FAILED,
        error
    }
}
function requestFetchPhoto(id) {
    return {
        type: FETCH_PHOTO,
        id
    }
}
function successFetchPhoto(photo) {
    return {
        type: FETCH_PHOTO_SUCCESS,
        photo
    }
}
function failureFetchPhoto(error) {
    return {
        type: FETCH_PHOTO_FAILED,
        error
    }
}

export function fetchPhotos(){
    return dispatch => {
        dispatch(requestFetchPhotos())
        axios.get(apiUrl.photos)
			.then(response => dispatch(successFetchPhotos(response.data)))
			.catch(_ => dispatch(failureFetchPhotos("Fetch photos failed!")))
    }
}

export function fetchPhotosByAlbumId(id){
    return dispatch => {
        dispatch(requestFetchPhotosByAlbumId(id))
        axios.get(`${apiUrl.photos}?albumId=${id}`)
			.then(response => dispatch(successFetchPhotos(response.data)))
			.catch(_ => dispatch(failureFetchPhotos("Fetch photos failed!")))
    }
}

export function fetchPhoto(id){
    return dispatch => {
        dispatch(requestFetchPhoto(id))
        axios.get(`${apiUrl.photos}/${id}`)
			.then(response => dispatch(successFetchPhoto(response.data)))
			.catch(_ => dispatch(failureFetchPhoto("Fetch photo failed!")))
    }
}

