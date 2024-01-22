import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './Login.css';
import Alert from '@mui/material/Alert';
import AlertDialog from '../DailogueBox/AlertDialog';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const [open, setOpen] = useState(false);

const [title, setTitle] = useState('');
const [desc, setDesc] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      history.push('/dashboard');
    } else if (username.trim() !== "" && password.trim() !== "") {
      const userData = {
        username: username,
        password: password
      };
      console.log('User Data:', userData);

    } else {
      setOpen(true);
      setTitle('Error - Incomplete Form');
setDesc('Please Fill in All the Required Fields and Try Again');

    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="container">

  <AlertDialog open={open} handleClose={handleClose} title = {title} description = {desc}  />
      <div className="form">
        <h1>Login</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit} // Ensure the onSubmit handler is connected to the form
        >
          <div>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{ style: { color: 'white' } }}
            />
          </div>
          <div>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" style={{ color: 'white' }} required>
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      style={{ color: 'white' }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{ style: { color: 'white' } }}
              />
            </FormControl>
          </div>
          <button type="submit" className="login-button" style={{ outline: 'none' }}>
            Login
          </button>
        </Box>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
