import * as authSagas from './auth';
import * as swiggySagas from './swiggySaga';

export const sagas = {
  ...authSagas,
  ...swiggySagas,
};
