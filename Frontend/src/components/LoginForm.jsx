import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box } from '@mui/material';
import TextField from "@mui/material/TextField";
import {login} from '../api/auth/auth';
import '../styles/login.css'

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Obtiene la función de navegación

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await login({ username, password });
      localStorage.setItem("token", token);
      // Redirigir a la página principal después del inicio de sesión
      navigate("/comandante"); // Redirige al usuario a la página principal ("/")
    } catch (error) {
      setError("Authentication failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2vh'
        }}
      >
        <Grid
          container spacing={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Grid item xs={12}>
            <TextField
            className='custom-text-field'
              variant="outlined"
              required
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className='custom-text-field'
              variant="outlined"
              required
              id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        {error && <p>{error}</p>}
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#DBA44E',
            color: 'white',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: 'darkviolet',
              boxShadow: '0px 4px 8px rgba(138, 43, 226, 0.5)',
            },
          }}
          >
          Launch
        </Button>
      </Box>
    </form>
  );
}
