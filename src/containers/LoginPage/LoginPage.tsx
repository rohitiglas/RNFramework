import React, {memo} from 'react';
import {FormikProvider} from 'formik';
import {useLoginPageData} from './hooks';
import {LoginScreenProps} from './types';
import {LoginTemplate} from '../../presentational/components/templates/LoginTemplate/LoginTemplate';

export const LoginPage = memo<LoginScreenProps>(() => {
  const {formik} = useLoginPageData();

  return (
    <FormikProvider value={formik}>
      <LoginTemplate testID="login" />
    </FormikProvider>
  );
});
