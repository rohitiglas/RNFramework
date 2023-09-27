import {useCallback, useEffect} from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {LoginFormModel} from '../types';
import {validationSchema} from '../validation';
import {fetchData} from '../../../store/actions/swiggyAction';

export const useRestaurantPageData = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
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
    data,
  };
};
