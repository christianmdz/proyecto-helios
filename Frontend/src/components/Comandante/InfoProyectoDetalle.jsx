import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { getOneProject } from '../../api/proyectos/proyectos';

import InfoTripulantesEnProyecto from './InfoTripulantesEnProyecto';
import AsignarTripulanteEnProyecto from './AsignarTripulanteEnProyecto';
import ProyectoDetalleTarjetaComandante from './ProyectoDetalleTarjetaComandante';

export default function InfoProyectoDetalle() {

    const {id} = useParams();
    const {data} = getOneProject(id);
    const [showTripulantes, setShowTripulantes] = useState(false);
    const [asignarTripulante, setAsignarTripulante] = useState(false);

    const handleBack = () => {
        window.location.href = '/comandante/proyectos';
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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        textAlign: 'center',
        marginTop: '14vh', 
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
        Información detallada del proyecto
        </Typography>
        <Typography variant="h4" sx={{
          fontFamily: 'Orbitron',
          marginBottom: '1rem',
          color: 'white',
          maxWidth: '85vw', 
        }}>
        La investigación es la clave para el éxito de la misión
        </Typography>
      </Box>
      {data && <ProyectoDetalleTarjetaComandante key={data.id} data={data} onVerTripulantes={handleVerTripulantes} onAsignarTripulantes={handleAsignarTripulante} />
      }
      {showTripulantes && <InfoTripulantesEnProyecto id={id} />}
      {asignarTripulante && <AsignarTripulanteEnProyecto id={id} />}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Centra horizontalmente
          marginTop: '3vh', // Margen superior de 3vh
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
          Volver a proyectos
        </Button>
      </Box>
    </>
  )
}