import React from 'react'
import { Box, Grid, Typography } from "@mui/material"
import Button from '@mui/material/Button';

export default function TripulanteTarjetaComandante({tripulante}) {
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
                ${tripulante.campo === 'LIDER' ? '#DBA44E'
                : tripulante.campo === 'CIENCIA' ? '#74A44E'
                : tripulante.campo === 'INGENIERIA' ? '#50a4c2'
                : tripulante.campo === 'NAVEGACION' ? '#A83739' : '#50a4c2'},
                transparent)`,
            }}
        >
          <Grid>
            <Box
              component={"img"}
              src={path+tripulante.id+".jpg"}
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
            <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Nombre: {tripulante.nombre}</Typography>
            <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Apellido: {tripulante.apellido}</Typography>
            <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Rol: {formatoRol(tripulante.rol)}</Typography>
            <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Campo: {tripulante.campo}</Typography>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'between',
              backgroundColor: 'transparent',
  
            }}
            >
            
            </Grid>
            <Button
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
          Ver Tripulante
        </Button>  
        </Box>
      </Box>
    )
  };
