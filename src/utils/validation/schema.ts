import * as yup from 'yup';

export const passwordSchema = yup
  .string()
  .required('Password is required')
  .matches(/\d+/, 'Password must contain at least one number')
  .matches(/[a-z]+/, 'Password must contain at least one lowercase letter')
  .matches(/[A-Z]+/, 'Password must contain at least one uppercase letter')
  .matches(
    /[!@#$%^&*()-+]+/,
    'Password must contain at least one special character'
  );

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required('Email is required')
      .matches(
        /^\S+@\S+\.\S+$/i,
        'Should be a valid email address(example@example.com)'
      ),
    password: passwordSchema,
  })
  .required();

export default schema;
