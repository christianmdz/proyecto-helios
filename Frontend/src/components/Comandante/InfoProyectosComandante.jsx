import React from 'react';
import { Box, Typography } from "@mui/material"
import TareaTarjetaComandante from './TareaTarjetaComandante';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProjects } from '../../api/proyectos/proyectos';
import ProyectoTarjetaComandante from './ProyectoTarjetaComandante';

export default function InfoProyectosComandante() {

    const {data} = getAllProjects();
  return (
    <>
    <Box 
    >
      <Typography variant="h2" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>
        Información de los proyectos
      </Typography>
      <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}>
        La investigación es la clave para el éxito de la misión
      </Typography>
      <Button
          component={Link}
          to="/comandante/crear-proyecto"
          type="button"
          variant="contained"
          sx={{
            backgroundColor: '#DBA44E',
            color: 'white',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: 'darkviolet',
              boxShadow: '0px 4px 8px rgba(138, 43, 226, 0.5)',
            },
          }}
          >
          Crear Proyecto
      </Button>
    </Box>
    {data?.map((project) => (
      <ProyectoTarjetaComandante key={project.id} project={project} />
    ))}
  </>
  )
}