import React, { useState, useContext} from 'react';
import { RiGoogleFill } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { GiWarBonnet } from "react-icons/gi";
import { FaApple } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api_url } from '../../config';
import {
  Container,
  Paper,
  Typography,
  TextField,
  IconButton,
  Button,
  InputAdornment,
  Box,
  Divider
} from '@mui/material';
import { DarkModeContext } from '../../components/DarkModeContext';


const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [darkMode, setDarkMode] = useState(() => {
  //   // Retrieve the dark mode preference from localStorage
  //   const savedDarkMode = localStorage.getItem('darkMode');
  //   return savedDarkMode === 'true';
  // });
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  // useEffect(() => {
  //   // Store the dark mode preference in localStorage
  //   localStorage.setItem('darkMode', darkMode);
  // }, [darkMode]);

  const handleSignUp = () => {
    navigate('/register');
  };

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post(`${api_url}/api/auth/login`, formData);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard/default');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Login failed. Please check your username and password.');
      } else if (error.request) {
        setError('No response from server. Please check your network connection.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: darkMode ?"#2E2E48": "#f7c345" }}>
      <Container maxWidth="xs" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: darkMode ? '#2E2E48' : '#f7c345', color: darkMode ? 'white' : '#002D74' }}>
        <Paper elevation={3} sx={{ p: 4, background: darkMode ? '#2E2E48' : 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)', width: '100%', borderRadius: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box display="flex" alignItems="center" bgcolor="black" p={1} borderRadius="50%">
              <GiWarBonnet color="white" size="24" />
            </Box>
            <IconButton onClick={toggleDarkMode}>
              {darkMode ? <MdOutlineLightMode style={{ color: "white" }} /> : <MdDarkMode />}
            </IconButton>
          </Box>
          <Typography variant="h5" fontWeight="bold" sx={{ color: darkMode ? '#ffffff' : '#000000' }}>Login to Storytale</Typography>
          <Typography variant="body2" mt={1} sx={{ color: darkMode ? '#ffffff' : '#000000' }}>Grab high-class graphics and boost your design workflow</Typography>

          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2} mt={2}>
              <TextField
                label="Email or Username"
                variant="outlined"
                name="username"
                value={formData.username}
                onChange={handleChange}
                fullWidth
                InputProps={{
                  style: { color: darkMode ? 'white' : 'inherit' },
                  classes: { notchedOutline: darkMode ? 'MuiOutlinedInput-notchedOutline' : '' },
                }}
                InputLabelProps={{
                  sx: {
                    color: darkMode ? 'white' : 'grey.600'
                  }
                }}
                sx={{ bgcolor: darkMode ? '#2E2E48' : '#f7c345' }}
              />
              <TextField
                label="Password"
                variant="outlined"
                name="password"
                type={passwordVisible ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                fullWidth
                InputProps={{
                  style: { color: darkMode ? 'white' : 'inherit' },
                  classes: { notchedOutline: darkMode ? 'MuiOutlinedInput-notchedOutline' : '' },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility}>
                        {passwordVisible ? <IoEyeOff style={{ color: darkMode ? 'white' : 'inherit' }} /> : <IoEye style={{ color: darkMode ? 'white' : 'inherit' }} />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                InputLabelProps={{
                  sx: {
                    color: darkMode ? 'white' : 'grey.600'
                  }
                }}
                sx={{ bgcolor: darkMode ? '#2E2E48' : '#f7c345' }}
              />
              {error && <Typography color="error">{error}</Typography>}
              <Button type="submit" variant="contained" color="success" fullWidth>Login</Button>
            </Box>
          </form>

          <Box mt={4} display="flex" alignItems="center">
            <Divider sx={{ flexGrow: 1 }} />
            <Typography variant="body2" sx={{ mx: 2, color: darkMode ? '#ffffff' : '#000000' }} >OR authorize with</Typography>
            <Divider sx={{ flexGrow: 1 }} />
          </Box>

          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="outlined" startIcon={<RiGoogleFill />} sx={{ flexGrow: 1, mr: 1, bgcolor: darkMode ? '#2E2E48' : '#f7c345', color: darkMode ? 'white' : '#002D74' }}>Google</Button>
            <Button variant="outlined" startIcon={<FaApple />} sx={{ flexGrow: 1, ml: 1, bgcolor: darkMode ? '#2E2E48' : '#f7c345', color: darkMode ? 'white' : '#002D74' }}>Apple</Button>
          </Box>

          <Box mt={2} textAlign="center">
            <Button variant="text" sx={{ color: darkMode ? '#ffffff' : '#002D74' }}>Forgot password?</Button>
          </Box>

          <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#000000' }}>Don't have an account?</Typography>
            <Button variant="outlined" onClick={handleSignUp} sx={{ bgcolor: darkMode ? '#2E2E48' : '#f7c345', color: darkMode ? 'white' : '#002D74' }}>Sign up</Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
