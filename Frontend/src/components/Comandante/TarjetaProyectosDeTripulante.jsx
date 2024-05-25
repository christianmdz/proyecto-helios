import React from 'react'
import { Box, Grid, Typography, Card, CardActionArea } from "@mui/material"
import { useMediaQuery, useTheme } from '@mui/material';

export default function TarjetaProyectosDeTripulante({ project }) {

  const path = "/src/assets/"

  const viewDetail = () => {
    window.location.href = `/comandante/proyectos/${project.id}`;
  }

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const gradientDirection = isSmallScreen ? 'to bottom' : 'to right';
  const gradientColor = project.campo === 'LIDER' ? '#DBA44E'
    : project.campo === 'CIENCIA' ? '#74A44E'
      : project.campo === 'INGENIERIA' ? '#50a4c2'
        : project.campo === 'NAVEGACION' ? '#A83739' : '#c25095';

  return (
    <Card
      sx={{
        display: 'flex',
        paddingLeft: { xs: '2vw', sm: '2vw', md: '4vw', lg: '5vw', xl: '5vw' },
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
              padding: { xs: '2vw', md: '0' }
            }}
          >
            <Box
              component="img"
              src={path + "proyecto_" + project.campo + ".jpg"}
              alt="proyecto"
              sx={{
                width: 'auto',
                height: 'auto',
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
                justifyContent: 'left',
                backgroundColor: 'transparent',
                textAlign: { xs: 'center', md: 'left', lg: 'left' },
                minWidth: { md: '20vw', lg:'50vw', xl:'50vw' }
              }}
            >
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md:'1.5rem' } }}>Nombre: {project.nombre}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md:'1.5rem' } }}>Director: {project.director}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md:'1.5rem' } }}>Descripcion: {project.descripcion}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md:'1.5rem' } }}>Campo: {project.campo}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md:'1.5rem' } }}>Etapa: {project.etapa}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md:'1.5rem' } }}>Email Director: {project.directorEmail}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md:'1.5rem' } }}>Fecha Inicio: {project.fechaInicio}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md:'1.5rem' } }}>Fecha Fin: {project.fechaFin}</Typography>
            </Grid>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  )
};