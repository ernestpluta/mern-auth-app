
import { object, string, ref } from 'yup';
const loginSchema = object({
    email: string()
    .required("Please enter your email.")
    .email("Please enter a valid email"),
    password: string()
    .required("Please enter your password")
    .min(8, "Password should be atleast 8 characters long."),
    passwordConfirmation: string()
     .oneOf([ref('password')], 'Passwords must match').required("Password confirm is required")
  })
  export default loginSchema