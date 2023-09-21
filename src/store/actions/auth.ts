import {createAction} from '@reduxjs/toolkit';

export const signInPasswordRequest = createAction<any>(
  'SIGN_IN_PASSWORD_REQUEST',
);
export const signInPasswordSuccess = createAction<any>(
  'SIGN_IN_PASSWORD_SUCCESS',
);
export const signInPasswordFailure = createAction<Error>(
  'SIGN_IN_PASSWORD_FAILURE',
);
