import React from "react"
import { Box, Typography } from "@mui/material"
import circe from '../../assets/circe_test.jpeg'
import InfoNave from "./InfoNave"
import InfoMision from "./InfoMision"
import InfoTripulacion from "./InfoTripulacion"
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from '@mui/material';

export default function HomeBody({ circeRef, ceresRef, crewRef }) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        <Box
        component="img"
        src={circe}
        alt="Circe Spaceship"
        sx={{
          objectFit: 'cover',
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
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
            paddingBottom: {xs:'15vh'}
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: 'Orbitron', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>Proyecto</Typography>
          <Typography variant={isMobile ? 'h2' : 'h1'} sx={{ fontFamily: 'Dune', textShadow: '0 0 25px rgba(255,255,255,0.7)' }}>HELIOS</Typography>
        </Box>
        {/* Continuar */}
        <Box sx={
          {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5vh',
            margin:{xs:'15vh 15vh 0vh 10vh', md:'15vh'},
            gap: '4vh'
          }
        }>
          <Typography variant={isMobile ? 'h4' : 'h1'} sx={{ fontFamily: 'Orbitron', color: 'white', textShadow: '0 0 15px rgba(227, 141, 49, 0.7)' }}>El futuro comienza aquí</Typography>
          <Button
          component={Link} to="/registro"
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
          ¡Únete ahora!
        </Button>
        </Box>
        
        <InfoNave circeRef={circeRef}/>
        <InfoMision ceresRef={ceresRef}/>
        <InfoTripulacion crewRef={crewRef}/>
      </div>
    </Box>
  )
}