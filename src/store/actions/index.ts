import * as authActions from './auth';
import * as swiggyActions from './swiggyAction';

export const appActions = {
  ...authActions,
  ...swiggyActions,
};
