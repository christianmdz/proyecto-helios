import React from 'react';
import { Box, Typography } from "@mui/material"
import TripulanteTarjeta from './TripulanteTarjeta';
import { getTripulantes } from '../../api/nave/nave';

const InfoTripulacion = ({ crewRef }) => {

  const {data: tripulantes} = getTripulantes();

  return (
    <>
      <Box ref={crewRef}
        sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '3vh'
        }}
      >
        <Typography variant="h2" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>
          Nuestra tripulación
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}>
              Forjando el destino de la humanidad
        </Typography>
      </Box>
      {tripulantes && tripulantes.map((data) => (
        <TripulanteTarjeta key={data.id} data={data} />
      ))}
    </>
  );
};

export default InfoTripulacion;