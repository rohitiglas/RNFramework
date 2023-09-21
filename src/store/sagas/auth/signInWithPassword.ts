import {call, put} from 'redux-saga/effects';
import {AxiosError} from 'axios';
import DeviceInfo from 'react-native-device-info';
import {injectAppNetworkService} from '../../../DI/helpers';

import {signInPasswordFailure, signInPasswordRequest} from '../../actions/auth';

export function* signInWithPasswordSaga({
  payload,
}: ReturnType<typeof signInPasswordRequest>): Generator<any, void, any> {
  try {
    // Inject the network service
    const networkService = yield call(injectAppNetworkService);

    // Get the device ID
    const deviceId = yield call([DeviceInfo, DeviceInfo.getDeviceId]);
    payload.deviceId = deviceId;

    // Call the signInWithPassword method
    const signInPassResponse = yield call([
      networkService,
      networkService.signInWithPassword,
    ]);
    yield put(signInPassResponse);

    // Handle success if needed
  } catch (error) {
    // Handle the error and dispatch an action
    yield put(signInPasswordFailure(error as AxiosError));
  }
}
