import React from "react"
import { Box, Grid, Typography } from "@mui/material"

const TripulanteTarjeta = ({ data }) => {

  const path = "/src/assets/"

  const formatoRol = (rol) => {
    return rol.substring(5)
  }

  return (
    <Box sx={{ display: 'flex',paddingLeft:'20vw', paddingBottom:'3vh'}}>
      <Box 
        sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            gap:'6vw',
            backgroundImage: `linear-gradient(to right,
              ${data.campo === 'LIDER' ? '#DBA44E'
              : data.campo === 'CIENCIA' ? '#74A44E'
              : data.campo === 'INGENIERIA' ? '#50a4c2'
              : data.campo === 'NAVEGACION' ? '#A83739' : '#50a4c2'},
              transparent)`,
          }}
      >
        <Grid>
          <Box
            component={"img"}
            src={path+data.id+".jpg"}
            alt="tripulante"
            sx={{
              objectFit: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}
          />
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'transparent',

          }}
        >
          <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Nombre: {data.nombre}</Typography>
          <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Apellido: {data.apellido}</Typography>
          <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Rol: {formatoRol(data.rol)}</Typography>
          <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Campo: {data.campo}</Typography>
        </Grid>
      </Box>
    </Box>
  )
};

export default TripulanteTarjeta;