import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from "../config/index"
import Button from '@mui/material/Button';
import CollapsibleTable from '../components/TablaDetalle';


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
      console.log(tripulacion)
    } catch (error) {
      console.error('Error al obtener información de la tripulación:', error);
    }
  };

  return (
    <div>
      <h2>Bienvenido Comandante</h2>
      <Button onClick={informacionTripulacion}>Tripulación</Button>
      <Button onClick={handleLogout}>Cerrar sesión</Button>
      {tripulacion && <CollapsibleTable tripulacion={tripulacion} />}
    </div>
  );
}
