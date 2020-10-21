import {
    GET_BANNER_NOTES,
    GET_BANNER_NOTES_SUCCESS,
    GET_BANNER_NOTES_ERROR,
} from './actionTypes';

export const getBannerNotes = data => {
    console.log('getBannerNotes data')
    return {
        type: GET_BANNER_NOTES,
        payload: data
    }
}

export const getBannerNotesSuccess = data => {
    return {
        type: GET_BANNER_NOTES_SUCCESS,
        payload: data
    }
}

export const getBannerNotesError = data => {
    return {
        type: GET_BANNER_NOTES_ERROR,
        payload: data
    }
}
