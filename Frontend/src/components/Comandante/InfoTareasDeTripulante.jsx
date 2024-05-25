import { taskInCrew } from '../../api/navegantes/navegantes'
import React from 'react'
import { Box, Typography } from "@mui/material"
import TarjetaTareasDeTripulante from './TarjetaTareasDeTripulante';

export default function InfoTareasDeTripulante({id}) {

    const {data} = taskInCrew(id);


  return (
    <>
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: '14vh',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Orbitron',
            marginBottom: '1rem',
            color: 'white',
            textShadow: '0 0 15px rgba(255,255,255,0.7)',
            maxWidth: '85vw',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          Todas las tareas del tripulante
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Orbitron',
            marginBottom: '1rem',
            color: 'white',
            textShadow: '0 0 15px rgba(255,255,255,0.7)',
            maxWidth: '85vw',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          El éxito de la misión depende de todos nosotros
        </Typography>
      </Box>
        {data?.map((task)=> (<TarjetaTareasDeTripulante key={task.id} task={task} />))}
    </>
  )
}
