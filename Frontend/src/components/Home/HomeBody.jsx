import React from "react"
import { Box, Typography } from "@mui/material"
import circe from '../../assets/circe_test.jpeg'
import InfoNave from "./InfoNave"
import InfoMision from "./InfoMision"
import InfoTripulacion from "./InfoTripulacion"

export default function HomeBody({ circeRef, ceresRef, crewRef }) {
  return (
    <Box sx={{
      backgroundColor: '#0f1214',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
      width: '100vw',
      height: '100vh',
      position: 'relative', // Establecer posicionamiento relativo para el contenedor
    }}>
      <div style={{ width: '100%', maxHeight: 'calc(100% - 4rem)', overflowY: 'auto', position: 'relative' }}>
        <img src={circe} alt="Circe Spaceship"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            color: 'white',
            textAlign: 'center',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: 'Orbitron', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>Proyecto</Typography>
          <Typography variant="h1" sx={{ fontFamily: 'Dune', textShadow: '0 0 25px rgba(255,255,255,0.7)' }}>HELIOS</Typography>
        </Box>
        {/* Continuar */}
        <Box sx={
          {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5vh',
            margin:'15vh'
          }
        }>
          <Typography variant='h1' sx={{ fontFamily: 'Orbitron', color: 'white', textShadow: '0 0 15px rgba(227, 141, 49, 0.7)' }}>El futuro comienza aquí</Typography>
          {/* <Typography variant='h4' sx={{fontFamily: 'Orbitron'}}></Typography> */}
        </Box>
        <InfoNave circeRef={circeRef}/>
        <InfoMision ceresRef={ceresRef}/>
        <InfoTripulacion crewRef={crewRef}/>
      </div>
    </Box>
  )
}