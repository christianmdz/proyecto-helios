import React from 'react';
import { Card, Typography } from '@mui/material';

const MisionTarjeta = ({ data }) => {

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        // backgroundImage: 'linear-gradient(to bottom, #eec484, transparent)',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Orbitron',
          marginBottom: '1rem',
          color:'white',
          textShadow: '0 0 15px rgba(255,255,255,0.7)',
          backgroundImage: 'linear-gradient(to left, #DBA44E, transparent)',
          padding: '1rem 1rem 1rem 0',
          textAlign: 'left'
        }}>
          Nos dirigimos a
      </Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Nombre: {data.nombre}</Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Destino: {data.destino}</Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Descripción: {data.descripcion}</Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Estimado: {data.duracion} días</Typography>
    </Card>
  );
};

export default MisionTarjeta;