import '@testing-library/jest-native/extend-expect';
import React from 'react';
import {render} from '@testing-library/react-native';
import {LoginPage} from '../LoginPage';

// Mock the useLoginPageData hook
jest.mock('../hooks', () => ({
  useLoginPageData: jest.fn(() => ({
    formik: {
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: jest.fn(),
      handleSubmit: jest.fn(),
      values: {
        email: '',
        password: '',
      },
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      isValid: true,
      errors: {
        email: '',
        password: '',
      },
    },
  })),
}));

describe('LoginPage', () => {
  it('renders without errors', () => {
    const {getByText, getByPlaceholderText} = render(<LoginPage />);

    expect(getByText('Login Page')).toBeTruthy();
    expect(getByPlaceholderText('Enter Email')).toBeTruthy();
    expect(getByPlaceholderText('Enter Password')).toBeTruthy();
    expect(getByText('Submit')).toBeTruthy();
  });
});
