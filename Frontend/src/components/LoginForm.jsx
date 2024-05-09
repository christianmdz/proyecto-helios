import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {login} from '../api/auth/auth';

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
      navigate("/"); // Redirige al usuario a la página principal ("/")
    } catch (error) {
      setError("Authentication failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'red', // Cambia el color del borde a rojo
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Sign In
      </Button>
    </form>
  );
}
