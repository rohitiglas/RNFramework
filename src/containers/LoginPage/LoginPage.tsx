import React, {memo} from 'react';
import {FormikProvider} from 'formik';
import {useLoginPageData} from './hooks';
import LoginTemplate from '../../presentational/components/templates/LoginTemplate/LoginTemplate';

export const LoginPage = memo(() => {
  const {formik} = useLoginPageData();

  return (
    <FormikProvider testId="formik-provider" value={formik}>
      <LoginTemplate />
    </FormikProvider>
  );
});
