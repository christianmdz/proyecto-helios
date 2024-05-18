import React from "react"
import circeSala from '../../assets/circe_sala.jpg'
import { Box, Grid, Typography } from "@mui/material"
import  {getNaves}  from '../../api/nave/nave';
import NaveTarjeta from "./NaveTarjeta";
import Button from "@mui/material/Button";

export default function InfoNave({ circeRef }) {

  const {data} = getNaves();

  return (
    <Box sx={{ width: '100%', padding: '2rem 0' }}>
      <Grid container spacing={2} sx={{display:'flex', alignItems:'center'}}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={circeSala}
            alt={"Sala Circe"}
            sx={{
              width: '75%',
              height: '75%',
              objectFit: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto'
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{display:'flex', flexDirection: 'column',  width: '100%'}}>
          <Box ref={circeRef}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              height: '100%',
              padding: '1rem',
            }}
          >
            <Typography ref={circeRef} variant="h2" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}>
              Circe, hogar de pioneros estelares
            </Typography>
            <Typography variant="h4" sx={{color:'white', textAlign:'justify', maxWidth:'85%'}}>
              Brillando con energía propia y sustentando a 10 mil almas, Circe avanza hacia nuevos horizontes.
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
            {data && <NaveTarjeta key={data.id} data={data}/>}
          <Button
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
          <Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}