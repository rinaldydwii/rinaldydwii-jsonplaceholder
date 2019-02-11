import { 
    FETCH_PHOTOS, 
    FETCH_PHOTOS_SUCCESS, 
    FETCH_PHOTOS_FAILED,
    FETCH_PHOTO,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILED,
} from '../actions/photoActions'

let initialStatePhotos = {
    loading: false,
    finish: false,
    photos: [],
    error: ''
};

export const photosReducer = (state = initialStatePhotos, action) => {
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

let initialStatePhoto = {
    loading: false,
    finish: false,
    photo: {},
    error: ''
};

export const photoReducer = (state = initialStatePhoto, action) => {
    switch (action.type) {
        case FETCH_PHOTO:
            return {
                ...state,
                loading: true,
            }
        case FETCH_PHOTO_SUCCESS:
            return {
                ...state,
                photo: action.photo,
                loading: false,
                finish: true
            }
        case FETCH_PHOTO_FAILED:
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
