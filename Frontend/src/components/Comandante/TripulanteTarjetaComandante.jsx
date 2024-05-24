import React from 'react'
import { Box, Grid, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { useMediaQuery, useTheme } from '@mui/material';

export default function TripulanteTarjetaComandante({tripulante}) {
    const path = "/src/assets/"


    const viewDetail = () => {
      window.location.href = `/comandante/tripulacion/${tripulante.id}`;
    }

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const gradientDirection = isSmallScreen ? 'to bottom' : 'to right';
    const gradientColor = tripulante.campo === 'LIDER' ? '#DBA44E'
      : tripulante.campo === 'CIENCIA' ? '#74A44E'
      : tripulante.campo === 'INGENIERIA' ? '#50a4c2'
      : tripulante.campo === 'NAVEGACION' ? '#A83739' : '#c25095';

    const formatoRol = (rol) => {
      return rol.substring(5)
    }
  
    return (
      <Box sx={{ display: 'flex', paddingLeft: { xs: '2vw', sm: '12vw', md: '4vw', lg:'15vw', xl:'15vw' }, paddingBottom: {xs:'3vh', md:'3vh'} }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Cambia la dirección del flex en pantallas pequeñas
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: { xs: '2vh', md: '6vw', lg:'auto' },
            backgroundImage: `linear-gradient(${gradientDirection}, ${gradientColor}, transparent)`,
            padding: { xs: '1vh', md: '0' }, // Padding para pantallas pequeñas
            minWidth: { xs: '90vw', sm:'65vw', md: '60vw', }, // minWidth para pantallas pequeñas
            maxWidth: {xs: '95vw', lg:'60vw'},
          }}
        >
          <Grid
            sx={{
              maxWidth:{xs:'auto',lg:'17vw'},
              maxheight:{xs:'auto',lg:'15vw'}
            }}
          >
            <Box
              component={"img"}
              src={tripulante.campo != 'NO_ASIGNADO' ? path+tripulante.id+".jpg" : path+"default_crew_avatar.jpg"}
              alt="tripulante"
              sx={{
                objectFit: 'cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                width: '100%', // Ajusta el tamaño de la imagen
                maxWidth: { xs: '95vw', md: 'auto' } // maxWidth para pantallas pequeñas
              }}
            />
          </Grid>
          <Box
            sx={{
              paddingLeft: '5vh',
              display: 'flex',
              flexDirection: 'column', // Cambia la dirección en pantallas más grandes si es necesario
              gap: '2vh',
            }}
          >
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                textAlign: { xs: 'center', md: 'left', lg:'left' }, // Centra el texto en pantallas pequeñas
                minWidth: {md: '20vw'},
              }}
            >
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color:'white', fontSize: { xs: '1.2rem' } }}> Nombre: {tripulante.nombre}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color:'white', fontSize: { xs: '1.2rem' } }}> Apellido: {tripulante.apellido}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color:'white', fontSize: { xs: '1.2rem' } }}> Rol: {formatoRol(tripulante.rol)}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color:'white', fontSize: { xs: '1.2rem' } }}> Campo: {tripulante.campo}</Typography>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: {xs:'center', lg:'flex-start', xl:'flex-start'},
                backgroundColor: 'transparent',
                gap: '2vw'
              }}
            >
              <Button
                onClick={viewDetail}
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
                  maxWidth: {lg:'15vw', xl:'10vw'}
                }}
              >
                Ver tripulante
              </Button>  
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  };
