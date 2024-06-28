import * as yup from 'yup';

const schema = yup.object().shape({
  phone: yup.string()
    .nullable()
    .notRequired()
    .test('is-valid-phone', 'Invalid phone number', (value) => {
      if (!value) return true; // If value is null or empty, it's valid
      return /^\+?[1-9]\d{1,14}$/.test(value); // Otherwise, validate the regex pattern
    }),
  email: yup.string().email('Invalid email').required('Email is required'),
  fullName: yup.string(),
  subject: yup.string().required(),
  budget: yup.string()
    .nullable()
    .notRequired()
    .test('is-valid-number', 'Must be a number', (value) => {
      if (!value) return true; // If the value is null or empty, it's valid
      return /^\d+$/.test(value); // Otherwise, validate the regex pattern
    }),
  message: yup.string(),
});

export default schema;