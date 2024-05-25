
import React from "react"
import { Box, Typography } from "@mui/material"
import circe from '../../assets/circe_test.jpeg'
import { useMediaQuery, useTheme } from '@mui/material';


export default function ComandanteHome() {
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
                height: 'auto', // Para mantener la proporción de la imagen
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
                <Typography variant="h4" sx={{ fontFamily: 'Orbitron', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>Bienvenido</Typography>
                <Typography variant={isMobile ? 'h2' : 'h1'} sx={{ fontFamily: 'Dune', textShadow: '0 0 25px rgba(255,255,255,0.7)' }}>Comandante</Typography>
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
                }}>
            </Box>
        </div>
    </Box>
)
}       
