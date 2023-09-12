import {useCallback} from 'react';
import {useFormik} from 'formik';
import {LoginFormModel} from '../types';
import {validationSchema} from '../validation';

export const useLoginPageData = () => {
  const onSubmit = useCallback(() => {}, []);

  const formik = useFormik<LoginFormModel>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit,
    enableReinitialize: false,
    validateOnChange: true,
    validateOnMount: true,
  });

  return {
    formik,
  };
};
