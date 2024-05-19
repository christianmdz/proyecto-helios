import { getOneCrew } from '../../api/navegantes/navegantes';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from "@mui/material"
import TripulanteDetalleTarjetaComandante from './TripulanteDetalleTarjetaComandante'
import Button from '@mui/material/Button';
import InfoTareasDeTripulante from './InfoTareasDeTripulante';
import InfoProyectosDeTripulante from './InfoProyectosDeTripulante';

export default function TripulanteDetalle() {

    const {id} = useParams();
    const {data} = getOneCrew(id);
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
      >
        <Typography variant="h2" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>
          Nuestra tripulación
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}>
              Forjando el destino de la humanidad
        </Typography>
      </Box>
      {data && <TripulanteDetalleTarjetaComandante key={data.id} data={data} onVerProyectos={handleVerProyectos} onVerTareas={handleVerTareas} />
      }
      {showProjects && <InfoProyectosDeTripulante id={id} />}
      {showTasks && <InfoTareasDeTripulante id={id} />}
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
          }}
          >
          Volver a tripulación
        </Button>
    </>
  )
}
