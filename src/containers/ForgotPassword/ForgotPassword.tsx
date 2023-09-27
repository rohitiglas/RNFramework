import React, {memo} from 'react';
import {FormikProvider} from 'formik';
import {useLoginPageData} from './hooks';
import ForgotPasswordTemplate from '../../presentational/components/templates/ForgotPasswordTemplate/ForgotPasswordTemplate';

export const ForgotPasswordPage = memo(() => {
  const {formik} = useLoginPageData();

  return (
    <FormikProvider testId="formik-provider" value={formik}>
      <ForgotPasswordTemplate />
    </FormikProvider>
  );
});
