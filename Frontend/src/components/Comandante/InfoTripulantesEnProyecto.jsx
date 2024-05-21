import React from 'react'
import { Box, Typography } from "@mui/material"
import { getCrewInProject } from '../../api/navenproy/navenproy';
import TarjetaTripulantesEnProyecto from './TarjetaTripulantesEnProyecto';


export default function InfoTripulantesEnProyecto({id}) {

    const {data} = getCrewInProject(id);

  return (
    <>
      <Box 
      >
        <Typography variant="h2" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>
        Tripulantes que participan en el proyeto
        </Typography>
      </Box>
        {data?.map((tripulanteProyecto)=> (<TarjetaTripulantesEnProyecto key={tripulanteProyecto.id} tripulanteProyecto={tripulanteProyecto} projectId={id}/>))}
    </>
  )
}
