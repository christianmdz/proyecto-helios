import React from 'react';
import { Box, Typography } from "@mui/material"
import { getAllTasks } from '../../api/tareas/tareas';
import TareaTarjetaComandante from './TareaTarjetaComandante';
import Button from '@mui/material/Button';

export default function InfoTareasComandante() {

    const {data} = getAllTasks();

    const viewCreate = () => {
        window.location.href = `/comandante/crearTareaComandante`;   
    }

  return (
    <>
    <Box 
    >
      <Typography variant="h2" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>
        Información de las tareas
      </Typography>
      <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}>
        Mantener la nave a punto, es el éxito de la misión
      </Typography>
      <Button
          onClick={viewCreate}
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
          Crear Tarea
        </Button>
    </Box>
    {data?.map((task) => (
      <TareaTarjetaComandante key={task.id} task={task} />
    ))}
  </>
  )
}
