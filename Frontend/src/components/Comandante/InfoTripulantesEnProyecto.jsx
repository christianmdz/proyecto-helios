import React from 'react'
import { Box, Typography } from "@mui/material"
import { getCrewInProject } from '../../api/navenproy/navenproy';
import TarjetaTripulantesEnProyecto from './TarjetaTripulantesEnProyecto';



export default function InfoTripulantesEnProyecto({id}) {

    const {data} = getCrewInProject(id);

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
        textAlign: 'center',
        maxWidth: '85vw', 
        fontSize: { xs: '3rem', md: '4rem', lg: '3rem' }
        }}
        >
        Tripulantes que participan en el proyecto
      </Typography>
      </Box>
        {data?.map((tripulanteProyecto)=> (<TarjetaTripulantesEnProyecto key={tripulanteProyecto.id} tripulanteProyecto={tripulanteProyecto} projectId={id}/>))}
    </>
  )
}
