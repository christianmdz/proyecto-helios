import { AppBar, CssBaseline, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export default function TrabajandoNav() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      <CssBaseline />
      <AppBar sx={{
        backgroundColor: 'hsla(210, 14%, 7%, 0.6)',
        backdropFilter: 'blur(5px)',
        padding: '1vh',
      }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Orbitron', cursor: 'pointer' }} >
            HELIOS
          </Typography>
          <Box>
            <Button color="inherit" onClick={handleLogout}>Cerrar sesión</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}
