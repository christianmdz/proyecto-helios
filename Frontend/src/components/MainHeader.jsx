import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  // Datos ficticios de la nave y la misión
  const shipName = "Circe";
  const missionName = "Misión Ceres";

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo del proyecto */}
        <Typography variant="h6">
          Proyecto Helios
        </Typography>
        
        {/* Información de la nave y la misión */}
        <Typography variant="subtitle1">
          {shipName} - {missionName}
        </Typography>
        
        {/* Botón para ir a la página de login */}
        <Button component={Link} to="/login" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default MainHeader;
