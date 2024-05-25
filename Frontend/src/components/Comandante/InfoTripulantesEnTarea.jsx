
import React from 'react'
import TarjetaTripulantesEnTarea from './TarjetaTripulantesEnTarea';
import { Box, Typography } from "@mui/material"
import { getCrewInTask } from '../../api/naventarea/naventarea';

export default function InfoTripulantesEnTarea({id}) {

    const {data} = getCrewInTask(id);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '3vh' }} 
      >
        <Typography
        variant="h2"
        sx={{
        fontFamily: 'Orbitron',
        marginBottom: '1rem',
        color: 'white',
        textShadow: '0 0 15px rgba(255,255,255,0.7)',
        textAlign: 'center', // Centra el texto horizontalmente
        maxWidth: '85vw', // Tamaño máximo del texto
        fontSize: { xs: '3rem', md: '4rem', lg: '3rem' } // Tamaño de la tipografía según la pantalla
        }}
        >
        Tripulantes que participan en la tarea
      </Typography>
      </Box>
      {data?.map((tripulanteTarea)=> (<TarjetaTripulantesEnTarea key={tripulanteTarea.id} tripulanteTarea={tripulanteTarea} taskId={id}/>))}

    </>
  )
}
