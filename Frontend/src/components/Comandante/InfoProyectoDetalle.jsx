import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { getOneProject } from '../../api/proyectos/proyectos';
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
      >
        <Typography variant="h2" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>
        Información detallada del proyecto
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white' }}>
        La investigación es la clave para el éxito de la misión
        </Typography>
      </Box>
      {data && <ProyectoDetalleTarjetaComandante key={data.id} data={data} onVerTripulantes={handleVerTripulantes} onAsignarTripulantes={handleAsignarTripulante} />
      }
      {showTripulantes && <InfoTripulantesEnProyecto id={id} />}
      {asignarTripulante && <AsignarTripulanteEnProyecto id={id} />}
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
          Volver a proyectos
        </Button>
    </>
  )
}