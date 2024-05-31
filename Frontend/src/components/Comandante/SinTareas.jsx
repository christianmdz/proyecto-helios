import React from 'react'
import { Box, Typography } from "@mui/material"


export default function SinTareas() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        textAlign: 'center',
        marginTop: '3vh', 
      }} 
      >
        <Typography variant="h2" sx={{
          fontFamily: 'Orbitron',
          marginBottom: '1rem',
          color: 'white',
          textShadow: '0 0 15px rgba(255,255,255,0.7)',
          maxWidth: '85vw', 
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        }}>
        Sin tareas asignadas
        </Typography>
    </Box>
  )
}
