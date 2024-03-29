import * as yup from 'yup';

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(5, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export default LoginSchema;
