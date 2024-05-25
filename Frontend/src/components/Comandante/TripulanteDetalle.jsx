import { getOneCrew } from '../../api/navegantes/navegantes';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from "@mui/material"
import TripulanteDetalleTarjetaComandante from './TripulanteDetalleTarjetaComandante'
import Button from '@mui/material/Button';
import InfoTareasDeTripulante from './InfoTareasDeTripulante';
import InfoProyectosDeTripulante from './InfoProyectosDeTripulante';

export default function TripulanteDetalle() {

  const { id } = useParams();
  const { data } = getOneCrew(id);
  const [showProjects, setShowProjects] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const handleBack = () => {
    window.location.href = '/comandante/tripulacion';
  }
  const handleVerProyectos = () => {
    setShowProjects(true);
    setShowTasks(false);
  }

  const handleVerTareas = () => {
    setShowTasks(true);
    setShowProjects(false);
  }



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
          Nuestra tripulación
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
          Forjando el destino de la humanidad
        </Typography>
      </Box>
      <Box
        sx={{

          display: 'flex',
          flexDirection: 'column',
          paddingLeft: { xs: '0', md: '15vw' }
        }}
      >
        {data && <TripulanteDetalleTarjetaComandante key={data.id} data={data} onVerProyectos={handleVerProyectos} onVerTareas={handleVerTareas} />}
      </Box>
      {showProjects && <InfoProyectosDeTripulante id={id} />}
      {showTasks && <InfoTareasDeTripulante id={id} />}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3vh'
        }}
      >
        <Button
          onClick={handleBack}
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
            marginBottom: '3vh'
          }}
        >
          Volver a tripulación
        </Button>
      </Box>
    </>
  )
}
