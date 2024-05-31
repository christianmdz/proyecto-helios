import React from 'react';
import { Card, Typography } from '@mui/material';

const NaveTarjeta = ({ data }) => {

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Orbitron',
          marginBottom: '1rem',
          color:'white',
          textShadow: '0 0 15px rgba(255,255,255,0.7)',
          backgroundImage: 'linear-gradient(to right, #50a4c2, transparent)',
          padding: '1rem 1rem 1rem 0',
          textAlign: 'right'
        }}>
          Circe en cifras
      </Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white' }}> Comandante: {data.comandante}</Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white' }}> Afiliación: {data.afiliacion}</Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white' }}> Motor: {data.motor}</Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white' }}> Tripulación: {data.tripulacion}</Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white' }}> Carga: {data.carga} Toneladas Métricas</Typography>
    </Card>
  );
};

export default NaveTarjeta;
