import React from 'react'
import { Box, Grid, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { deleteCrewInTask } from '../../api/naventarea/naventarea';
import { useNavigate } from 'react-router-dom';

export default function TarjetaTripulantesEnTarea({tripulanteTarea, taskId}) {

    const navigate = useNavigate();
    const handleEliminarTripulante = () => {
        deleteCrewInTask(taskId, tripulanteTarea.id);
        navigate('/comandante/tareas');

    }
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
                ${tripulanteTarea.campo === 'LIDER' ? '#DBA44E'
                : tripulanteTarea.campo === 'CIENCIA' ? '#74A44E'
                : tripulanteTarea.campo === 'INGENIERIA' ? '#50a4c2'
                : tripulanteTarea.campo === 'NAVEGACION' ? '#A83739' : '#50a4c2'},
                transparent)`,
            }}
        >
          <Grid>
            <Box
              component={"img"}
              src={path+tripulanteTarea.id+".jpg"}
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
            <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Nombre: {tripulanteTarea.nombre}</Typography>
            <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Apellido: {tripulanteTarea.apellido}</Typography>
            <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Nombre de Usuario: {tripulanteTarea.username}</Typography>
            <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Email-Responsable: {tripulanteTarea.email}</Typography>
            <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Campo: {tripulanteTarea.campo}</Typography>
            <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Mando: {formatoRol(tripulanteTarea.rol)}</Typography>
            <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Fecha de Incorporación: {tripulanteTarea.fechaIncorporacion}</Typography>
            <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Jornada: {tripulanteTarea.jornada}</Typography>
            <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Asignación en la tarea: {tripulanteTarea.asignacion}</Typography>
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
              onClick={handleEliminarTripulante}
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
              Eliminar Tripulante
            </Button>   
      </Box>
    )
  };