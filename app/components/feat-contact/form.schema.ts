import * as yup from 'yup';

const schema = yup.object().shape({
  phone: yup.string().matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  email: yup.string().email('Invalid email').required('Email is required'),
  fullName: yup.string(),
  subject: yup.string(),
  budget: yup.number(),
  message: yup.string(),
});

export default schema;