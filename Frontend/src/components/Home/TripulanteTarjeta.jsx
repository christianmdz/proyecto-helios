import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import { useMediaQuery, useTheme } from '@mui/material';

const TripulanteTarjeta = ({ data }) => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const gradientDirection = isSmallScreen ? 'to bottom' : 'to right';
  const gradientColor = data.campo === 'LIDER' ? '#DBA44E'
    : data.campo === 'CIENCIA' ? '#74A44E'
    : data.campo === 'INGENIERIA' ? '#50a4c2'
    : data.campo === 'NAVEGACION' ? '#A83739' : '#50a4c2';

  const path = "/src/assets/"

  const formatoRol = (rol) => {
    return rol.substring(5)
  }

  return (
    <Box sx={{ display: 'flex', paddingLeft: { xs: '2vw', sm: '4vw', md: '4vw', lg:'3vw', xl:'15vw' }, paddingBottom: {xs:'3vh', md:'3vh'} }}>
      <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Cambia la dirección del flex en pantallas pequeñas
        justifyContent: 'center',
        alignItems: 'center',
        gap: { xs: '2vh', md: '6vw' },
        backgroundImage: `linear-gradient(${gradientDirection}, ${gradientColor}, transparent)`,
        padding: { xs: '1vh', md: '0' }, // Padding para pantallas pequeñas
        minWidth: { xs: '95vw', md: 'auto' }, // minWidth para pantallas pequeñas
        maxWidth: {xs: '95vw'}
      }}
    >
      <Box
        component="img"
        src={path + data.id + ".jpg"}
        alt="tripulante"
        sx={{
          objectFit: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          width: '100%', // Ajusta el tamaño de la imagen
          maxWidth: { xs: '95vw', md: 'auto' } // maxWidth para pantallas pequeñas
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          textAlign: { xs: 'center', md: 'left', lg:'left' }, // Centra el texto en pantallas pequeñas
          minWidth: {md: '20vw'},
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color: 'white', fontSize: { xs: '1.2rem', md: '1.4rem', lg:'2rem' }, minWidth: {md:'29vw'} }}>Nombre: {data.nombre}</Typography>
        <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color: 'white', fontSize: { xs: '1.2rem', md: '1.4rem', lg:'2rem' }, minWidth: {md:'29vw'} }}>Apellido: {data.apellido}</Typography>
        <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color: 'white', fontSize: { xs: '1.2rem', md: '1.4rem', lg:'2rem' }, minWidth: {md:'29vw'} }}>Rol: {formatoRol(data.rol)}</Typography>
        <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color: 'white', fontSize: { xs: '1.2rem', md: '1.4rem', lg:'2rem' }, minWidth: {md:'29vw'} }}>Campo: {data.campo}</Typography>
      </Box>
    </Box>
    </Box>
  )
};

export default TripulanteTarjeta;