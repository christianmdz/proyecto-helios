import React, { useState } from 'react'
import { Box, Grid, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { deleteCrewInTask } from '../../api/naventarea/naventarea';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';

export default function TarjetaTripulantesEnTarea({tripulanteTarea, taskId}) {

  const [idtask , setIdtask] = useState(taskId);
  const navigate = useNavigate();
  const handleEliminarTripulante = async () => {
    await deleteCrewInTask(taskId, tripulanteTarea.id);
    navigate(`/comandante/tareas/${idtask}`, { replace: true });
  }

  const path = "/src/assets/"

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const gradientDirection = isSmallScreen ? 'to bottom' : 'to right';
  const gradientColor = tripulanteTarea.campo === 'LIDER' ? '#DBA44E'
    : tripulanteTarea.campo === 'CIENCIA' ? '#74A44E'
      : tripulanteTarea.campo === 'INGENIERIA' ? '#50a4c2'
        : tripulanteTarea.campo === 'NAVEGACION' ? '#A83739' : '#c25095';

  const fechaIncorporacion = new Date(tripulanteTarea.fechaIncorporacion);

  const opcionesFormatoFecha = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaIncorporacionFormateada = fechaIncorporacion.toLocaleDateString('es-ES', opcionesFormatoFecha);

  const formatoRol = (rol) => {
    return rol.substring(5)
  }
  
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: { xs: '0', sm: '0', md: '0', lg: '21vw', xl: '21vw' }, marginRight: { lg: '15vw', xl: '15vw' }, alignItems: 'center', paddingBottom: { xs: '3vh', md: '3vh' } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'column', lg: 'row' },
          justifyContent: 'center',
          gap: { xs: '2vh', md: '6vw' },
          backgroundImage: `linear-gradient(${gradientDirection}, ${gradientColor}, transparent)`,
          padding: { xs: '1vh', md: '0', lg: '0' },
          width: '100%', 
          maxWidth: '100vw',
        }}
      >
        <Grid item
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', lg: 'flex-end' },
            alignItems: 'center',
            width: { xs: '100%', lg: 'auto' },
          }}>
          <Box
            component={"img"}
            src={tripulanteTarea.campo != 'NO_ASIGNADO' ? path + tripulanteTarea.id + ".jpg" : path + "default_crew_avatar.jpg"}
            alt="proyecto"
            sx={{

              objectFit: 'cover',
              width: { xs: '100%', md: '100%', lg: 'auto' }, 
              height: { xs: 'auto', md: 'auto', lg: '100%' }, 
              maxWidth: { xs: '95vw', md: '100%', lg: '100%' } 
            }}
          />
        </Grid>
        <Box
          sx={{
            padding: '5vh',
            display: 'flex',
            flexDirection: 'column',
            gap: '2vh',
            textAlign: 'center',
            minWidth: '20vw',
            maxWidth: '95vw',
          }}
        >
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              textAlign: { xs: 'center', md: 'center', lg: 'left' },
              minWidth: { md: '20vw' },
            }}
          >
            <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color: 'white', fontSize: { md: '2.3rem', lg: '1rem' } }}> Nombre: {tripulanteTarea.nombre}</Typography>
            <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color: 'white', fontSize: { md: '2.3rem', lg: '1rem' } }}> Apellido: {tripulanteTarea.apellido}</Typography>
            <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color: 'white', fontSize: { md: '2.3rem', lg: '1rem' }, }}> Nombre usuario: {tripulanteTarea.username}</Typography>
            <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color: 'white', fontSize: { md: '2.3rem', lg: '1rem' } }}> Campo: {tripulanteTarea.campo}</Typography>
            <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color: 'white', fontSize: { md: '2.3rem', lg: '1rem' } }}> Email: {tripulanteTarea.email}</Typography>
            <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color: 'white', fontSize: { md: '2.3rem', lg: '1rem' } }}> Mando: {formatoRol(tripulanteTarea.rol)}</Typography>
            <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color: 'white', fontSize: { md: '2.3rem', lg: '1rem' } }}> Fecha de Incorporación: {fechaIncorporacionFormateada}</Typography>
            <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color: 'white', fontSize: { md: '2.3rem', lg: '1rem' } }}> Jornada: {tripulanteTarea.jornada}</Typography>
            <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color: 'white', fontSize: { md: '2.3rem', lg: '1rem' } }}> Asignación: {tripulanteTarea.asignacion}</Typography>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'between',
              backgroundColor: 'transparent',
            }}
          >
            <Button
              onClick={handleEliminarTripulante}
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
                maxWidth: { lg: '15vw', xl: '10vw' }
              }}
            >
              Eliminar
            </Button>
          </Grid>
        </Box>
      </Box>
    </Box>
    )
  };