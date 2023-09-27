// In App.js in a new project

import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPage} from './src/containers';
import {ForgotPasswordPage} from './src/containers/ForgotPassword';
import store from './src/store/store';
import {RestaurantPage} from './src/containers/Restaurants';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Restaurant" component={RestaurantPage} />
          <Stack.Screen name="Register" component={LoginPage} />
          <Stack.Screen name="ForgetPassword" component={ForgotPasswordPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
