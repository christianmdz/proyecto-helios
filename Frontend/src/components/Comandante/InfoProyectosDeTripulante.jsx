import React from 'react'
import { Box, Typography } from "@mui/material"
import { projectInCrew } from '../../api/navegantes/navegantes'
import TarjetaProyectosDeTripulante from './TarjetaProyectosDeTripulante';

export default function InfoProyectosDeTripulante({id}) {

    const {data} = projectInCrew(id);


  return (
    <>
    <Box 
      >
        <Typography variant="h2" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>
          Todos los proyectos del tripulante
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}>
            El éxito de la misión depende de todos nosotros
        </Typography>
      </Box>
        {data?.map((project)=> (<TarjetaProyectosDeTripulante key={project.id} project={project} />))}
    </>
  )
}
