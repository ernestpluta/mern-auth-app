
import { object, string } from 'yup';
const loginSchema = object({
    email: string()
    .required("Please enter your email.")
    .email("Please enter a valid email"),
    password: string()
    .required("Please enter your password")
    .min(8, "Password should be atleast 8 characters long.")
  })
  export default loginSchema