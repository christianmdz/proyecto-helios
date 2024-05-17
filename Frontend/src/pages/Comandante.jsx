import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from "../config/index"
import Button from '@mui/material/Button';
import CollapsibleTable from '../components/TablaDetalle';
import { Typography } from '@mui/material';
import '../styles/comandante.css'


export default function Comandante() {
  const navigate = useNavigate();
  const [tripulacion, setTripulacion] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const informacionTripulacion = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${BaseUrl.navegante}/info-tripulacion`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTripulacion(response.data);
    } catch (error) {
      console.error('Error al obtener información de la tripulación:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}> Bienvenido Comandante</Typography>
      <Button onClick={informacionTripulacion}>Tripulación</Button>
      <Button onClick={handleLogout}>Cerrar sesión</Button>
      {tripulacion && <CollapsibleTable tripulacion={tripulacion} />}
    </div>
  );
}
