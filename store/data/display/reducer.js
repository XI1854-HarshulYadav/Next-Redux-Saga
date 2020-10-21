import {
    GET_BANNER_NOTES,
    GET_BANNER_NOTES_SUCCESS,
    GET_BANNER_NOTES_ERROR,
} from './actionTypes';

const initialState = {
    loading: false,
    notes: null,
    notes_error: null,
    declaration: null,
    declaration_error: null,
    cta: null,
    cta_error: null,
    faqs: null,
    faqs_error: null
}

const displayContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BANNER_NOTES:
            state = {
                ...state,
                loading: true,
                error: null,
                notes: null
            };
            break;
        case GET_BANNER_NOTES_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                notes: action.payload
            };
            break;
        case GET_BANNER_NOTES_ERROR:
            state = {
                ...state,
                loading: false,
                error: action.payload,
                notes: null
            };
            break;
        default:
            state = {
                ...state
            }
    }
    return state;
}

export default displayContentReducer;