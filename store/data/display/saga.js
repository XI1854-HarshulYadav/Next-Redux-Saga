import { takeEvery, fork, put, all } from 'redux-saga/effects';
import axios from 'axios';

import { SERVER_URL } from '../../../lib/common';
import {
    GET_BANNER_TEXT,
} from '../../../lib/api-endpoints';

import {
    GET_BANNER_NOTES,
} from './actionTypes';

import {
    getBannerNotesSuccess,
    getBannerNotesError,
} from './actions';


//Banner text call
function* getBannerNotes(data) {
    try {
        console.log('getBannerNotes data', data);
        const response = yield axios.get(
            SERVER_URL + GET_BANNER_TEXT + data.payload.provider
        ).then(response => response)
            .catch(error => ({
                status: "error",
                errors: response
            }))
        console.log('response', response);
        if (response.status === 200) {
            console.log('banner data yes');
            yield (put(getBannerNotesSuccess(response.data)));
        } else {
            yield (put(getBannerNotesError(response.data)));
        }
    } catch (error) {
        yield (put((getBannerNotesError(error))));
    }
}

export function* watchGetBannerText() {
    yield takeEvery(GET_BANNER_NOTES, getBannerNotes);
}

function* displayContentSaga() {
    yield all([
        fork(watchGetBannerText),
    ])
}

export default displayContentSaga;