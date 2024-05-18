import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from "../config/index"
import Button from '@mui/material/Button';
import CollapsibleTable from '../components/TablaDetalle';
import { Typography } from '@mui/material';
import '../styles/comandante.css'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


export default function Comandante() {
  const navigate = useNavigate();
  const [tripulacion, setTripulacion] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  

  return (
    <div>
      <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}> Bienvenido Comandante</Typography>
      <Link to="tripulacion">
        <Button>Tripulación</Button>
      </Link>
      <Button onClick={handleLogout}>Cerrar sesión</Button>
      <Outlet/>
    </div>
  );
}
