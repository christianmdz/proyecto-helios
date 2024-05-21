import React from 'react'
import { Box, Grid, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { deleteCrewInProject } from '../../api/navenproy/navenproy';
import { useNavigate } from 'react-router-dom';

export default function TarjetaTripulantesEnProyecto({tripulanteProyecto, projectId}) {

    const navigate = useNavigate();
    const handleEliminarTripulante = () => {
        deleteCrewInProject(projectId, tripulanteProyecto.id);
        navigate('/comandante/proyectos');
    }

    const formatoRol = (rol) => {
        return rol.substring(5)
      }

    const path = "/src/assets/"


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
            ${tripulanteProyecto.campo === 'LIDER' ? '#DBA44E'
            : tripulanteProyecto.campo === 'CIENCIA' ? '#74A44E'
            : tripulanteProyecto.campo === 'INGENIERIA' ? '#50a4c2'
            : tripulanteProyecto.campo === 'NAVEGACION' ? '#A83739' : '#50a4c2'},
            transparent)`,
        }}
    >
      <Grid>
        <Box
          component={"img"}
          src={path+tripulanteProyecto.id+".jpg"}
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
        <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Nombre: {tripulanteProyecto.nombre}</Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Apellido: {tripulanteProyecto.apellido}</Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Nombre de Usuario: {tripulanteProyecto.username}</Typography>
        <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Email: {tripulanteProyecto.email}</Typography>
        <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Campo: {tripulanteProyecto.campo}</Typography>
        <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Mando: {formatoRol(tripulanteProyecto.rol)}</Typography>
        <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Fecha de Incorporación: {tripulanteProyecto.fechaIncorporacion}</Typography>
        <Typography variant="p" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}> Días asignados: {tripulanteProyecto.diasAsignados}</Typography>
        
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
