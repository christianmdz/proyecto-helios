import React from 'react';
import { Card, Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';

const MisionTarjeta = ({ data }) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        maxWidth: {xs:'95vw'}
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
      <Typography variant="subtitle1" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white' }}> Nombre: {data.nombre}</Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white' }}> Destino: {data.destino}</Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white' }}> Descripción: {data.descripcion}</Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white' }}> Estimado: {data.duracion} días</Typography>
    </Card>
  );
};

export default MisionTarjeta;