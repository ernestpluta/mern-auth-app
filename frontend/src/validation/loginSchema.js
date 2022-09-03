
import { object, string, ref } from 'yup';
const loginSchema = object({
    email: string()
    .required("Please enter your email.")
    .email("Please enter a valid email.")
    .max(255, "Email should contain less than 255 characters.")
    .test("checkLowerCase", "Please enter an email in lowercase letters.", (value) =>  value && value === value.toLowerCase()),
    password: string()
    .required("Please enter your password")
    .min(8, "Password should be atleast 8 characters long.")
    .max(250, "Password should contain less than 250 characters."),
    passwordConfirmation: string()
     .oneOf([ref('password')], 'Passwords must match.')
     .required("Password confirmation is required.")
  })
  export default loginSchema