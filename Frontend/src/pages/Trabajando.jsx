import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import TrabajandoNav from "../components/TrabajandoNav";
import trabajando from "../assets/trabajando.jpg"
import "../styles/comandante.css";

export default function Trabajando() {
  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xl: '5vh' },
        gap: '4vh'
      }}
    >
      <TrabajandoNav />
      <Box
        component="img"
        src={trabajando}
        alt="Estamos trabajando en ello"
        sx={{
          width: { xs: '100%', md: "60%", lg: "75%", xl: "75%" },
          height: { xs: '100%', md: "60%", lg: "75%", xl: "75%" },
          objectFit: "cover",
          paddingTop: { xs: '7vh', xl: '14vh' }
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3vh',
          padding: { xs: '2vw' }
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: 'Orbitron', color: 'white', fontSize: { xs: '1.2rem', md:'1.4rem' }, textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>Estamos mejorando el sistema</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3vh',
            padding: { xs: '0 5vh 0 5vh' }
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: 'Orbitron', color: 'white', fontSize: { xs: '0.8rem', md:'1.2rem' } }}>
            Pronto estarán disponibles todas las funciones para el resto de la tripulación.
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}