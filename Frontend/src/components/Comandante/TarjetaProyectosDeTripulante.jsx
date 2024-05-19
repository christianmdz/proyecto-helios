import React from 'react'
import { Box, Grid, Typography } from "@mui/material"

export default function TarjetaProyectosDeTripulante({project}) {

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
                  ${project.campo === 'LIDER' ? '#DBA44E'
                  : project.campo === 'CIENCIA' ? '#74A44E'
                  : project.campo === 'INGENIERIA' ? '#50a4c2'
                  : project.campo === 'NAVEGACION' ? '#A83739' : '#50a4c2'},
                  transparent)`,
              }}
          >
            <Grid>
              <Box
                component={"img"}
                src={path+project.id+".jpg"}
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
              <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Nombre: {project.nombre}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Director: {project.director}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Campo: {project.campo}</Typography>
              
              <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Descripción: {project.descripcion}</Typography>
              <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> E-Mail Director: {project.directorEmail}</Typography>
              <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Fecha de inicio: {project.fechaInicio}</Typography>
              <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Fecha de fin: {project.fechaFin}</Typography>
              <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Etapa del proyecto: {project.etapa}</Typography>
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