import React from 'react'
import { Box, Grid, Typography } from "@mui/material"


export default function TarjetaTareasDeTripulante({task}) {
    
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
                  ${task.campo === 'LIDER' ? '#DBA44E'
                  : task.campo === 'CIENCIA' ? '#74A44E'
                  : task.campo === 'INGENIERIA' ? '#50a4c2'
                  : task.campo === 'NAVEGACION' ? '#A83739' : '#50a4c2'},
                  transparent)`,
              }}
          >
            <Grid>
              <Box
                component={"img"}
                src={path+task.id+".jpg"}
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
              <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Nombre: {task.nombre}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Responsable: {task.responsable}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Campo: {task.campo}</Typography>
              
              <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Descripción: {task.descripcion}</Typography>
              <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Email: {task.frecuencia}</Typography>
              <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> E-Mail Responsable: {task.responsableEmail}</Typography>
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

          </Box>
        </Box>
      )
    };