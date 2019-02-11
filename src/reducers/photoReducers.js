import { 
    FETCH_PHOTOS, 
    FETCH_PHOTOS_SUCCESS, 
    FETCH_PHOTOS_FAILED,
    FETCH_PHOTO,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILED,
} from '../actions/photoActions'


let initialStatePhoto = {
    loading: false,
    finish: false,
    photos: [],
    error: ''
};

const photoReducer = (state = initialStatePhoto, action) => {
    switch (action.type) {
        case FETCH_PHOTOS:
            return {
                ...state,
                loading: true,
            }
        case FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                photos: [...state.photos, ...action.photos],
                loading: false,
                finish: true
            }
        case FETCH_PHOTOS_FAILED:
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

export default photoReducer