import {takeLatest} from 'redux-saga/effects';
import {FETCH_DATA_REQUEST} from '../actions/swiggyAction';
import {fetchDataSaga} from './swiggySaga';

export function* appRootSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}
