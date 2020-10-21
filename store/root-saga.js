import { all } from 'redux-saga/effects';
// import { watchFetchApod } from './apod';
import displayContentSaga from './data/display/saga';

export default function* rootSaga() {
  try {
    yield all([
    //   watchFetchApod(),
    displayContentSaga()
    ]);
  } catch (err) {
    console.log(err);
  }
}