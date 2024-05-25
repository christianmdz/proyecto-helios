import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from "../config/index"
import Button from '@mui/material/Button';

import { Box, Typography } from '@mui/material';
import '../styles/comandante.css'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ComandanteNav from '../components/Comandante/ComandanteNav';


export default function Comandante() {
  const navigate = useNavigate();
  const [tripulacion, setTripulacion] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  

  return (
    <div >
      <Box
        sx={{
          backgroundColor: '#0f1214',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
      <ComandanteNav className/>
      {/* <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}> Bienvenido Comandante</Typography> */}
    
      {/* <Button component={Link} to="tripulacion" >Tripulación</Button>
      <Button component={Link} to="tareas" >Tareas</Button>
      <Button component={Link} to="proyectos" >Proyectos</Button>
      <Button onClick={handleLogout}>Cerrar sesión</Button> */}
      <Outlet/>
      </Box>
    </div>
  );
}
