import React from 'react';
import { Box, FormControl, TextField, InputLabel, FilledInput, OutlinedInput , Container, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility';
export default function Login() {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container maxWidth="sm" >
      <Box padding={{xs: 2, sm: 4, md: 8}} my={50} borderRadius={3} height={400}>
        <Typography variant='h3'mb={10}>Sign in</Typography>
        <form action="/api/users" method="POST">
            <FormControl variant="filled" fullWidth="true">
              <TextField 
                id="email"
                label="Email"
                name='email'
                multiline
              />
            </FormControl>
            <FormControl variant="outlined" sx={{mt: '1rem'}} fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                name='password'
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
          </FormControl>
            <Button type='submit' variant="contained" size='large' margin="dense" sx={{ mt: '1.5rem', py: '1rem', textTransform: 'capitalize'}}  fullWidth >Sign in</Button>
        </form>
      </Box>
    </Container>
  );
}
