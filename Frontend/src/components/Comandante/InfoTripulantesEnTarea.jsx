import { getCrewInTask } from '../../api/naventarea/naventarea'
import React from 'react'
import TarjetaTripulantesEnTarea from './TarjetaTripulantesEnTarea';
import { Box, Typography } from "@mui/material"

export default function InfoTripulantesEnTarea({id}) {

    const {data} = getCrewInTask(id);

  return (
    <>
      <Box 
      >
        <Typography variant="h2" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>
        Información de las tareas
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}>
        Mantener la nave a punto, es el éxito de la misión
        </Typography>
      </Box>
      {data?.map((tripulanteTarea)=> (<TarjetaTripulantesEnTarea key={tripulanteTarea.id} tripulanteTarea={tripulanteTarea} taskId={id}/>))}

    </>
  )
}
