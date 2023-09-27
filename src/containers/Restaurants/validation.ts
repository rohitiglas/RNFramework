import * as Yup from 'yup';

// Regular expression for email validation
export const EMAIL_VALIDATE_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Regular expression for password validation
const PASSWORD_VALIDATION_REGEX =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])^\S*$/;

// Schema for password validation
export const passwordValidationSchema = Yup.string()
  .required('Password cannot be empty')
  .min(8, 'Password must be at least 8 characters')
  .matches(PASSWORD_VALIDATION_REGEX, 'Invalid password');

// Overall validation schema for the form
export const validationSchema = Yup.object({
  email: Yup.string()
    .matches(EMAIL_VALIDATE_REGEX, 'Invalid email')
    .required('Email cannot be empty'),
  password: passwordValidationSchema,
});
