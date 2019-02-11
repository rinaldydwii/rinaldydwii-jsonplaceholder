import { 
    FETCH_ALBUMS, 
    FETCH_ALBUMS_SUCCESS, 
    FETCH_ALBUMS_FAILED,
    FETCH_ALBUM,
    FETCH_ALBUM_SUCCESS,
    FETCH_ALBUM_FAILED,
} from '../actions/albumActions'


let initialStateAlbums = {
    loading: false,
    finish: false,
    albums: [],
    error: ''
};

const albumReducer = (state = initialStateAlbums, action) => {
    switch (action.type) {
        case FETCH_ALBUMS:
            return {
                ...state,
                loading: true,
            }
        case FETCH_ALBUMS_SUCCESS:
            return {
                ...state,
                albums: [...state.albums, ...action.albums],
                loading: false,
                finish: true
            }
        case FETCH_ALBUMS_FAILED:
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

export default albumReducer