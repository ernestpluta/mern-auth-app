import { useState, useEffect } from 'react';
import { Box, Stack, TextField, Container, Button, Typography, InputAdornment, IconButton, Checkbox, FormControlLabel, Divider} from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility';
import { useFormik, Field, Form, Formik } from 'formik';
import loginSchema from '../validation/loginSchema';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
const API_URL = "/api/"
const [showPassword, setShowPassword] = useState(false)
const [showConfirmPassword, setShowConfirmPassword] = useState(false)

const handleClickShowPassword = () => {
  setShowPassword(!showPassword)
}
const handleClickShowConfirmPassword = () => {
  setShowConfirmPassword(!showConfirmPassword)
}
const navigate = useNavigate()
useEffect(() => {}, [showPassword, showConfirmPassword])

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
        passwordConfirmation: ''
      },
      validationSchema: loginSchema,
      onSubmit: async (values, resetForm) => {
        try{
          const response = await axios.post(API_URL + "register", {email: values.email, password: values.password})
          console.log(response)
        }
        catch(err){
          console.log(err)
        }
        resetForm()
      }
    });

  return (
    <Container maxWidth="sm" sx={{display:'flex',alignItems:'center',minHeight: '100vh'}}>
      <Box padding={{xs: 4, sm: 6, md: 8}}  boxShadow={"rgba(0, 0, 0, 0.08) 0px 4px 12px;"} borderRadius={3} >
        <Typography variant='h3' mb={2}>Sign up</Typography>
        <Typography variant='subtitle1'mb={10} color="#717172">Enter your credentials to access your account.</Typography>
          <Formik
          initialValues={formik.initialValues} >
            <Form action="/api/users" method="POST" onSubmit={formik.handleSubmit}>
              <Field
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
              as={TextField}
              fullWidth
              />
              <Field
                id="password"
                name="password"
                label="Password"
                type={showPassword ? "text": "password"}
                value={formik.values.password}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                onChange={formik.handleChange}
                as={TextField}
                sx={{mt: '1rem'}}
                fullWidth
                InputProps={{ 
                  endAdornment: 
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment> }}
              />
                <Field
                id="passwordConfirmation"
                name="passwordConfirmation"
                label="Confirm Password"
                type={showConfirmPassword ? "text": "password"}
                value={formik.values.passwordConfirmation}
                error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                onChange={formik.handleChange('passwordConfirmation')}
                as={TextField}
                sx={{mt: '1rem'}}
                fullWidth
                InputProps={{ 
                  endAdornment: 
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowConfirmPassword}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment> }}
              />

            <Typography variant='subtitle1' align='right' my={2} color="primary">Forgot your password?</Typography>
            <Button type='submit' variant="contained" size='large' margin="dense" sx={{ mt: '1.5rem', py: '1rem', textTransform: 'capitalize'}}  fullWidth >Sign in</Button>
            {/* <Box mt={4}>
              <Divider component="div">
                <Typography px={1} color="#717172" textAlign="center">or</Typography>
              </Divider>
            </Box> */}
            <Typography variant='subtitle1' align='center'  mt={4}>Already have an account? <span style={{textDecoration:'underline'}}>Log in</span></Typography>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
}
