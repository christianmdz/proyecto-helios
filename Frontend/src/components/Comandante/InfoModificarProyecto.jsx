import React from 'react'
import { Box, Typography } from "@mui/material"
import { useParams } from 'react-router-dom'
import ModificarProyecto from './ModificarProyecto';
import { getOneProject } from '../../api/proyectos/proyectos';

export default function InfoModificarProyecto() {
    const {id} = useParams();
    const {data} = getOneProject(id);

  return (
    <>
      <Box 
      >
        <Typography variant="h2" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>
        Aquí puedes modificar el proyecto
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}>
        ¡Recuerda! La investigación es la clave para el éxito de la misión
        </Typography>
      </Box>
      {data && <ModificarProyecto key={data.id} data={data}/>
      }
    </>
  )
}
