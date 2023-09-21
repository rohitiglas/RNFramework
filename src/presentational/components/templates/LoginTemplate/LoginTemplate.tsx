import React, {memo} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {useFormikContext} from 'formik';
import {LoginFormModel} from '../../../../containers/LoginPage/types';
import styles from './styles';

const LoginTemplate = memo(() => {
  const {handleSubmit, values, handleChange, handleBlur, isValid, errors} =
    useFormikContext<LoginFormModel>();

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Login Page</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        onChangeText={handleChange('email')}
        value={values.email}
        onBlur={handleBlur('email')}
        placeholder="Enter Email"
      />
      {!!errors.email && <Text style={styles.error}>{errors.email}</Text>}

      {/* Password Input */}
      <TextInput
        style={styles.input}
        onChangeText={handleChange('password')}
        value={values.password}
        onBlur={handleBlur('password')}
        placeholder="Enter Password"
        keyboardType="numeric"
      />
      {!!errors.password && <Text style={styles.error}>{errors.password}</Text>}

      {/* Login Button */}
      <TouchableOpacity
        disabled={!isValid}
        style={styles.button}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
});

export default LoginTemplate;
