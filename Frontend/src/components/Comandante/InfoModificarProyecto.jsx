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
      <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
          textAlign: 'center',
          marginTop: '14vh', 
        }}
      >
        <Typography variant="h2"
        sx={{
          fontFamily: 'Orbitron',
          marginBottom: '1rem',
          color: 'white',
          textShadow: '0 0 15px rgba(255,255,255,0.7)',
          maxWidth: '85vw', 
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        }}>
        Aquí puedes modificar el proyecto
        </Typography>
        <Typography variant="h4"
        sx={{
          fontFamily: 'Orbitron',
          marginBottom: '1rem',
          color: 'white',
          maxWidth: '85vw', 
        }}>
        ¡Recuerda! La investigación es la clave para el éxito de la misión
        </Typography>
      </Box>
      {data && <ModificarProyecto key={data.id} data={data}/>
      }
    </>
  )
}
