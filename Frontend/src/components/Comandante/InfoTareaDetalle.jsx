import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import TareaDetalleTarjetaComandante from './TareaDetalleTarjetaComandante';
import { getOneTask } from '../../api/tareas/tareas';
import InfoTripulantesEnTarea from './InfoTripulantesEnTarea';

export default function InfoTareaDetalle() {

    const {id} = useParams();
    const {data} = getOneTask(id);
    const [showTripulantes, setShowTripulantes] = useState(false);
    const [asignarTripulante, setAsignarTripulante] = useState(false);

    const handleBack = () => {
        window.location.href = '/comandante/tareas';
    }

    const handleVerTripulantes = () => {
        setShowTripulantes(true);
        setAsignarTripulante(false);
    }

    const handleAsignarTripulante = () => {
        setAsignarTripulante(true);
        setShowTripulantes(false);
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
      </Box>
      {data && <TareaDetalleTarjetaComandante key={data.id} data={data} onVerTripulantes={handleVerTripulantes} onAsignarTripulantes={handleAsignarTripulante} />
      }
      {showTripulantes && <InfoTripulantesEnTarea id={id} />}
      {asignarTripulante && <AltaTripulanteEnTarea id={id} />}
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
          Volver a tareas
        </Button>
    </>
  )
}
