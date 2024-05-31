import React from "react"
import eridanus from '../../assets/eridanus.jpg'
import { Box, Grid, Typography } from "@mui/material"
import { getMisiones } from '../../api/nave/nave';
import MisionTarjeta from "./MisionTarjeta";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function InfoMision({ ceresRef }) {

  const { data } = getMisiones();

  return (
    <Box sx={{ width: '100%', padding: '2rem 0', padding:'3vw' }}>
      <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Box ref={ceresRef}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              height: '100%',
              padding: '1rem',
            }}
          >
            <Typography variant="h2" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color: 'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>
              Ceres, primer paso hacia las estrellas
            </Typography>
            <Typography variant="h4" sx={{ color: 'white', textAlign: 'justify', maxWidth: '85%' }}>
              Los cimientos de nuestra misión, proyectos y tareas.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              height: '100%',
              maxWidth: '85%',
              padding: '1rem',
            }}
          >
          </Box>
          <Box>
            {data && <MisionTarjeta key={data.id} data={data}/>}
          </Box>
          <Button
          component={Link} to="/registro"
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#50a4c2',
            color: 'white',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: 'darkviolet',
              boxShadow: '0px 4px 8px rgba(138, 43, 226, 0.5)',
            },
            maxWidth: {xs:'95vw'}
          }}
          >
          ¡Participa en la misión!
        </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={eridanus}
            alt={"Eridanus IV"}
            sx={{
              width: '85%',
              height: '85%',
              objectFit: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto'
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}