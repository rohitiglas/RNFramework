import React, {memo} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useFormikContext} from 'formik';
import {LoginFormModel} from '../../../../containers/LoginPage/types';
import styles from './styles';

export const ForgotPasswordTemplate = memo(() => {
  const {handleSubmit, values, handleChange, handleBlur, isValid} =
    useFormikContext<LoginFormModel>();

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text style={styles.logoText}>Login Page</Text> */}

        {/* Email Input */}
        <TextInput
          style={styles.input}
          onChangeText={handleChange('email')}
          value={values.email}
          onBlur={handleBlur('email')}
          placeholder="Email"
        />

        <Text style={{textAlign: 'right', marginRight: 30}}>Resend</Text>

        {/* {!!errors.password && (
          <Text style={styles.error}>{errors.password}</Text>
        )} */}

        {/* Login Button */}
        <TouchableOpacity
          disabled={!isValid}
          style={styles.button}
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
});

export default ForgotPasswordTemplate;
