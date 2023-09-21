import {takeLatest} from 'redux-saga/effects';
import {sagas} from './index';
import {signInPasswordRequest} from '../actions/auth';

const {signInWithPasswordSaga} = sagas;

export function* auraAppRootSaga() {
  yield takeLatest(signInPasswordRequest.type, signInWithPasswordSaga);
}
