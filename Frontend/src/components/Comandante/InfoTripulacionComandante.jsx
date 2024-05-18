import React from 'react';
import { Box, Typography } from "@mui/material"
import { getAllCrew } from '../../api/navegantes/navegantes';
import TripulanteTarjetaComandante from './TripulanteTarjetaComandante';


export default function InfoTripulacionComandante() {

    const {data} = getAllCrew();


  return (
    <>
      <Box 
      >
        <Typography variant="h2" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>
          Nuestra tripulación
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}>
              Forjando el destino de la humanidad
        </Typography>
      </Box>
      {data?.map((tripulante) => (
        <TripulanteTarjetaComandante key={tripulante.id} tripulante={tripulante} />
      ))}
    </>
  );
};
