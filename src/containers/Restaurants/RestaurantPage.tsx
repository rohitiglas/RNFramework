import React, {memo} from 'react';
import {FormikProvider} from 'formik';

import {useRestaurantPageData} from './hooks/useRestaurantPageData';
import RestaurantTemplate from '../../presentational/components/templates/RestaurantTemplate/RestaurantTemplate';

export const RestaurantPage = memo(() => {
  const {formik, data} = useRestaurantPageData();

  return (
    <FormikProvider value={formik}>
      <RestaurantTemplate restaurantData={data} />
    </FormikProvider>
  );
});
