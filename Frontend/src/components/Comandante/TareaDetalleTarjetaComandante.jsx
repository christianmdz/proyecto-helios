import React from 'react'
import { Box, Grid, Typography, Card } from "@mui/material"
import Button from '@mui/material/Button';
import { useMediaQuery, useTheme } from '@mui/material';
import '../../main.css'

export default function TareaDetalleTarjetaComandante({ data, onVerTripulantes, onAsignarTripulantes }) {
  const path = "/src/assets/"

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const gradientDirection = isSmallScreen ? 'to bottom' : 'to right';
  const gradientColor = data.campo === 'LIDER' ? '#DBA44E'
    : data.campo === 'CIENCIA' ? '#74A44E'
      : data.campo === 'INGENIERIA' ? '#50a4c2'
        : data.campo === 'NAVEGACION' ? '#A83739' : '#c25095';

  return (
    <Card
      sx={{
        display: 'flex',
        paddingLeft: { xs: '2vw', sm: '2vw', md: '4vw', lg: '15vw', xl: '15vw' },
        paddingBottom: { xs: '5vh', md: '3vh' },
        backgroundColor: 'transparent',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'flex-start',
          alignItems: 'center',
          // gap: { xs: '2vh', md: '6vw', lg: 'auto' },
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
            padding: { xs: '2vw', md: '0' }
          }}
        >
          <Box
            component="img"
            src={path + "tarea_" + data.campo + ".jpg"}
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
            padding: {md: '2vh 0 2vh 2vw'}
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
              gap: '1vh'
            }}
          >
            <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md: '1.2rem', lg:'1.2rem' } }}>Nombre: {data.nombre}</Typography>
            <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md: '1.2rem', lg:'1.2rem' } }}>Responsable: {data.responsable}</Typography>
            <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md: '1.2rem', lg:'1.2rem' } }}>Descripción: {data.descripcion}</Typography>
            <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md: '1.2rem', lg:'1.2rem' } }}>Campo: {data.campo}</Typography>
            <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md: '1.2rem', lg:'1.2rem' } }}>Email Responsable: {data.responsableEmail}</Typography>
            <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontSize: { xs: '1.2rem', md: '1.2rem', lg:'1.2rem' } }}>Frecuencia: {data.frecuencia}</Typography>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              gap:'2vw',
            }}
          >
            <Button
              onClick={onVerTripulantes}
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
                width: { xs: '95%', md: '95%', lg: 'auto' }, // Ancho completo en móvil, tamaño automático en tablet y escritorio
                maxWidth: { lg: '15vw', xl: '15vw' }, // Máximo ancho para asegurar que no se desborde en pantallas pequeñas
                marginTop: { xs: '2vh' }, // Margen superior solo en móvil
              }}
            >
              Ver Tripulantes
            </Button>
            <Button
              onClick={onAsignarTripulantes}
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
                width: { xs: '95%', md: '95%', lg: 'auto' }, // Ancho completo en móvil, tamaño automático en tablet y escritorio
                maxWidth: { lg: '15vw', xl: '15vw' }, // Máximo ancho para asegurar que no se desborde en pantallas pequeñas
                marginTop: { xs: '2vh' }, // Margen superior solo en móvil
              }}
            >
              Asignar
            </Button>
          </Grid>
        </Box>
      </Box>
    </Card>
  )
};