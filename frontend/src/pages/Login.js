import { useState, useEffect } from 'react';
import { Box, Stack, TextField, Container, Button, Typography, InputAdornment, IconButton, Checkbox, FormControlLabel, Divider} from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility';
import { useFormik, Field, Form, Formik } from 'formik';
import loginSchema from '../validation/loginSchema';


export default function Login() {
const [showPassword, setShowPassword] = useState(false)

const handleClickShowPassword = () => {
  setShowPassword(!showPassword)
}

useEffect(() => {}, [showPassword])

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: loginSchema,
      onSubmit: (values) => {
        console.log(values)
      }
    });

  return (
    <Container maxWidth="sm" sx={{display:'flex',alignItems:'center',minHeight: '100vh'}}>
      <Box padding={{xs: 4, sm: 6, md: 8}}  boxShadow={"rgba(0, 0, 0, 0.08) 0px 4px 12px;"} borderRadius={3} >
        <Typography variant='h3' mb={2}>Log in</Typography>
        <Typography variant='subtitle1'mb={10} color="#717172">Enter your credentials to access your account.</Typography>
          <Formik
          initialValues={formik.initialValues}>
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

            <Typography variant='subtitle1' align='right' my={2} color="primary">Forgot your password?</Typography>
            <Button type='submit' variant="contained" size='large' margin="dense" sx={{ mt: '1.5rem', py: '1rem', textTransform: 'capitalize'}}  fullWidth >Sign in</Button>
            {/* <Box mt={4}>
              <Divider component="div">
                <Typography px={1} color="#717172" textAlign="center">or</Typography>
              </Divider>
            </Box> */}
            <Typography variant='subtitle1' align='center'  mt={4}>Don't have an account? <span style={{textDecoration:'underline'}}>Sign Up</span></Typography>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
}
