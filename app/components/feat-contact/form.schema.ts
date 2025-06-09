import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  fullName: yup.string(),
  subject: yup.string().required(),
  message: yup.string(),
})

export type FormValue = yup.InferType<typeof schema>

export default schema
