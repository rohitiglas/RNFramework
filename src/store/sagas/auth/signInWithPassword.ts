import {call, put} from 'redux-saga/effects';
import {AxiosError} from 'axios';
import DeviceInfo from 'react-native-device-info';
import {injectAppNetworkService} from '../../../DI/helpers';

import {signInPasswordFailure, signInPasswordRequest} from '../../actions/auth';

export function* signInWithPasswordSaga({
  payload,
}: ReturnType<typeof signInPasswordRequest>) {
  try {
    const networkService: ReturnType<typeof injectAppNetworkService> =
      yield call(injectAppNetworkService);
    const deviceId: string = yield call([DeviceInfo, DeviceInfo.getDeviceId]);
    payload.deviceId = deviceId;
    const signInPassResponse: any = yield call([
      networkService,
      networkService.signInWithPassword,
    ]);
  } catch (error) {
    yield put(signInPasswordFailure(error as AxiosError));
  }
}
