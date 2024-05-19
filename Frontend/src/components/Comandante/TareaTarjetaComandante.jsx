import React from 'react'
import { Box, Grid, Typography } from "@mui/material"
import Button from '@mui/material/Button';

export default function TareaTarjetaComandante({task}) {
    const path = "/src/assets/"


    const viewDetail = () => {
      window.location.href = `/comandante/tareas/${task.id}`;
    }

    const viewModify = () => {
        window.location.href = `modificarTareaComandante/${task.id}`;   
    }

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
        <Button
          onClick={viewDetail}
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
          Ver Tarea
        </Button>
        <Button
          onClick={viewModify}
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
          Modificar Tarea
        </Button>     
      </Box>
    )
  };
