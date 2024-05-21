import React from "react"
import { Box, Grid, Typography } from "@mui/material"

const TripulanteTarjeta = ({ data }) => {

  const path = "/src/assets/"

  const formatoRol = (rol) => {
    return rol.substring(5)
  }

  return (
    <Box sx={{ display: 'flex', paddingLeft: { xs: '2vw', sm: '10vw', md: '20vw' }, paddingBottom: '3vh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Cambia la dirección del flex en pantallas pequeñas
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: '2vh', md: '6vw' },
          backgroundImage: `linear-gradient(to right,
            ${data.campo === 'LIDER' ? '#DBA44E'
            : data.campo === 'CIENCIA' ? '#74A44E'
            : data.campo === 'INGENIERIA' ? '#50a4c2'
            : data.campo === 'NAVEGACION' ? '#A83739' : '#50a4c2'},
            transparent)`,
          padding: { xs: '1vh', md: '0' } // Padding para pantallas pequeñas
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component="img"
            src={`${path}${data.id}.jpg`}
            alt="tripulante"
            sx={{
              objectFit: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              width: { xs: '100%', md: 'auto' }, // Ancho completo en pantallas pequeñas
              maxHeight: { xs: '200px', md: 'none' } // Ajuste de altura en pantallas pequeñas
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            textAlign: { xs: 'center', md: 'left' } // Centrar texto en pantallas pequeñas
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color: 'white' }}>
            Nombre: {data.nombre}
          </Typography>
          <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color: 'white' }}>
            Apellido: {data.apellido}
          </Typography>
          <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color: 'white' }}>
            Rol: {formatoRol(data.rol)}
          </Typography>
          <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color: 'white' }}>
            Campo: {data.campo}
          </Typography>
        </Grid>
      </Box>
    </Box>
  )
};

export default TripulanteTarjeta;