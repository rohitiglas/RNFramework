import * as Yup from 'yup';

export const EMAIL_VALIDATE_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const PASSWORD_VALIDATION_REGEX =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]\\^_`{|}~])^\S*$/;

export const passwordValidationSchema = Yup.string()
  .required('Password can not empty')
  .min(8, 'Invalid password')
  .matches(PASSWORD_VALIDATION_REGEX, {
    message: 'Invalid password',
  });

export const validationSchema = Yup.object({
  email: Yup.string()
    .matches(EMAIL_VALIDATE_REGEX, {
      excludeEmptyString: true,
      message: 'Invalid Email',
    })
    .required('Email can not empty'),
  password: passwordValidationSchema,
});
