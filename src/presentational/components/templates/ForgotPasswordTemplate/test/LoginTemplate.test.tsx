import '@testing-library/jest-native/extend-expect';
import React from 'react';
import {render} from '@testing-library/react-native';
import LoginTemplate from '../LoginTemplate';

const mockFormikContext = () => ({
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
});

describe('LoginTemplate', () => {
  it('renders the component without errors', () => {
    jest.spyOn(require('formik'), 'useFormikContext').mockReturnValueOnce({
      ...mockFormikContext(),
      isValid: true,
    });
    const {getByText, getByPlaceholderText} = render(<LoginTemplate />);

    // Assert that important elements are present
    expect(getByText('Login Page')).toBeTruthy();
    expect(getByPlaceholderText('Enter Email')).toBeTruthy();
    expect(getByPlaceholderText('Enter Password')).toBeTruthy();
    expect(getByText('Submit')).toBeTruthy();
  });

  it('disables the Submit button when isValid is false', () => {
    // Mock useFormikContext to return isValid as false
    jest.spyOn(require('formik'), 'useFormikContext').mockReturnValueOnce({
      ...mockFormikContext(),
      isValid: false,
    });

    const {getByText} = render(<LoginTemplate />);
    const submitButton = getByText('Submit');

    expect(submitButton).toBeDisabled();
  });
  it('Show the validation error of UserId and Password Inputs', () => {
    // Mock useFormikContext to return isValid as false
    jest.spyOn(require('formik'), 'useFormikContext').mockReturnValueOnce({
      ...mockFormikContext(),
      isValid: false,
      errors: {
        email: 'Please enter Email',
        password: 'Please enter Password',
      },
    });

    const {getByText} = render(<LoginTemplate />);
    const submitButton = getByText('Submit');

    expect(submitButton).toBeDisabled();
  });
});
