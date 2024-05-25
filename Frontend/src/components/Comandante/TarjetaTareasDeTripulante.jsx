import React from 'react'
import { Box, Grid, Typography, Card, CardActionArea } from "@mui/material"
import { useMediaQuery, useTheme } from '@mui/material';


export default function TarjetaTareasDeTripulante({ task }) {

  const path = "/src/assets/"

  const viewDetail = () => {
    window.location.href = `/comandante/tareas/${task.id}`;
  }

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const gradientDirection = isSmallScreen ? 'to bottom' : 'to right';
  const gradientColor = task.campo === 'LIDER' ? '#DBA44E'
    : task.campo === 'CIENCIA' ? '#74A44E'
    : task.campo === 'INGENIERIA' ? '#50a4c2'
    : task.campo === 'NAVEGACION' ? '#A83739' : '#c25095';


  return (
    <Card
      sx={{
        display: 'flex',
        paddingLeft: { xs: '2vw', sm: '2vw', md: '4vw', lg: '15vw', xl: '15vw' },
        paddingBottom: { xs: '5vh', md: '3vh' },
        backgroundColor: 'transparent',
      }}
    >
      <CardActionArea
        onClick={viewDetail}
        sx={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transición para el hover
          '&:hover': {
            transform: 'scale(0.98)', // Reducción del tamaño en hover
            boxShadow: `0 0 10px 2px ${gradientColor}`, // Sombra blanca en hover
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: { xs: '2vh', md: '6vw', lg: 'auto' },
            backgroundImage: `linear-gradient(${gradientDirection}, ${gradientColor}, transparent)`,
            minWidth: { xs: '90vw', sm: '65vw', md: '50vw' },
            maxWidth: { xs: '95vw', lg: '60vw' },
          }}
        >
          <Grid
            item
            sx={{
              width: { xs: '100%', md: 'auto' },
              maxWidth: { xs: '100%', md: '17vw' },
              height: { xs: 'auto', md: '100%' },
              padding:{xs:'2vw', md:'0'}
            }}
          >
            <Box
              component="img"
              src={path + "tarea_" + task.campo + ".jpg"}
              alt="tarea"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Grid>
          <Box
            sx={{
              paddingLeft: { xs: 0, md: '5vh' },
              display: 'flex',
              flexDirection: 'column',
              gap: '2vh',
            }}
          >
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                textAlign: { xs: 'center', md: 'left', lg: 'left' },
                minWidth: { md: '20vw' },
              }}
            >
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md: '1.6rem' } }}>Nombre: {task.nombre}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md: '1.6rem' } }}>Responsable: {task.apellido}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md: '1.6rem' } }}>Descripcion: {task.rol}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md: '1.6rem' } }}>Campo: {task.campo}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md: '1.6rem' } }}>Frecuencia: {task.campo}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md: '1.6rem' } }}>Email Responsable: {task.campo}</Typography>
            </Grid>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  )
};