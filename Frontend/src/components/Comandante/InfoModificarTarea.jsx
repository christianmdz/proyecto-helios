import React from 'react'
import { Box, Typography } from "@mui/material"
import { useParams } from 'react-router-dom'
import { getOneTask } from '../../api/tareas/tareas'
import ModificarTarea from './ModificarTarea'

export default function InfoModificarTarea() {

    const {id} = useParams();
    const {data} = getOneTask(id);

  return (
    <>
      <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
          textAlign: 'center',
          marginTop: '14vh', 
        }}
      >
        <Typography variant="h2"
        sx={{
          fontFamily: 'Orbitron',
          marginBottom: '1rem',
          color: 'white',
          textShadow: '0 0 15px rgba(255,255,255,0.7)',
          maxWidth: '85vw', 
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        }}>
        Aquí puedes modificar la tarea
        </Typography>
        <Typography variant="h4"
        sx={{
          fontFamily: 'Orbitron',
          marginBottom: '1rem',
          color: 'white',
          maxWidth: '85vw', 
        }}>
        Recuerda que mantener la nave a punto, es el éxito de la misión
        </Typography>
      </Box>
      {data && <ModificarTarea key={data.id} data={data}/>
      }
    </>
  )
}
