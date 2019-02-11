import axios from "axios"
import { apiUrl } from "../config/apiUrl";

export const FETCH_ALBUMS = "FETCH_ALBUMS"
export const FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS"
export const FETCH_ALBUMS_FAILED = "FETCH_ALBUMS_FAILED"
export const FETCH_ALBUM = "FETCH_ALBUM"
export const FETCH_ALBUM_SUCCESS = "FETCH_ALBUM_SUCCESS"
export const FETCH_ALBUM_FAILED = "FETCH_ALBUM_FAILED"

function requestFetchAlbums() {
    return {
        type: FETCH_ALBUMS,
    }
}
function requestFetchAlbumsByUserId(userId) {
    return {
        type: FETCH_ALBUMS,
        userId
    }
}
function successFetchAlbums(albums) {
    return {
        type: FETCH_ALBUMS_SUCCESS,
        albums
    }
}
function failureFetchAlbums(error) {
    return {
        type: FETCH_ALBUMS_FAILED,
        error
    }
}
function requestFetchAlbum(id) {
    return {
        type: FETCH_ALBUM,
        id
    }
}
function successFetchAlbum(album) {
    return {
        type: FETCH_ALBUM_SUCCESS,
        album
    }
}
function failureFetchAlbum(error) {
    return {
        type: FETCH_ALBUM_FAILED,
        error
    }
}

export function fetchAlbums(){
    return dispatch => {
        dispatch(requestFetchAlbums())
        axios.get(apiUrl.albums)
			.then(response => dispatch(successFetchAlbums(response.data)))
			.catch(_ => dispatch(failureFetchAlbums("Fetch albums failed!")))
    }
}

export function fetchAlbumsByUserId(id){
    return dispatch => {
        dispatch(requestFetchAlbumsByUserId(id))
        axios.get(`${apiUrl.albums}?userId=${id}`)
			.then(response => dispatch(successFetchAlbums(response.data)))
			.catch(_ => dispatch(failureFetchAlbums("Fetch albums failed!")))
    }
}

export function fetchAlbum(id){
    return dispatch => {
        dispatch(requestFetchAlbum(id))
        axios.get(`${apiUrl.albums}/${id}`)
			.then(response => dispatch(successFetchAlbum(response.data)))
			.catch(_ => dispatch(failureFetchAlbum("Fetch album failed!")))
    }
}
