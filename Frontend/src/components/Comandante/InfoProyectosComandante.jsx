import React from 'react';
import { Box, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProjects } from '../../api/proyectos/proyectos';
import ProyectoTarjetaComandante from './ProyectoTarjetaComandante';



export default function InfoProyectosComandante() {

    const {data} = getAllProjects();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
          textAlign: 'center',
          marginTop: '14vh', 
        }}
      >
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Orbitron',
          marginBottom: '1rem',
          color: 'white',
          textShadow: '0 0 15px rgba(255,255,255,0.7)',
          maxWidth: '85vw', 
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        }}
      >
        Información de los proyectos
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Orbitron',
          marginBottom: '1rem',
          color: 'white',
          maxWidth: '85vw', 
        }}
      >
        La investigación es la clave para el éxito de la misión
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', 
          marginTop: '3vh', 
        }}
      >
      <Button
        component={Link}
        to="/comandante/crear-proyecto"
        type="button"
        variant="contained"
        sx={{
          backgroundColor: '#74A44E',
          color: 'white',
          transition: 'background-color 0.3s ease',
          '&:hover': {
          backgroundColor: 'darkviolet',
          boxShadow: '0px 4px 8px rgba(138, 43, 226, 0.5)',
          },
          marginBottom: '3vh',
        }}
      >
        Crear Proyecto
      </Button>
    </Box>
  </Box>
  <Box
      sx={{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft: {lg:'5vw'}
      }}
    >
    {data?.map((project) => (
      <ProyectoTarjetaComandante key={project.id} project={project} />
    ))}
    </Box>
  </>
  )
}