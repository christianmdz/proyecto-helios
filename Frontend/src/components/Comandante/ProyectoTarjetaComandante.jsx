import React from 'react'
import { Box, Grid, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { useMediaQuery, useTheme } from '@mui/material';

export default function ProyectoTarjetaComandante({project}) {

    const path = "/src/assets/"

    const viewDetail = () => {
        window.location.href = `/comandante/proyectos/${project.id}`;
        }
    const viewModify = () => {
        window.location.href = `modificar-proyecto/${project.id}`;
        }

        const theme = useTheme();
        const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    
        const gradientDirection = isSmallScreen ? 'to bottom' : 'to right';
        const gradientColor = project.campo === 'LIDER' ? '#DBA44E'
          : project.campo === 'CIENCIA' ? '#74A44E'
          : project.campo === 'INGENIERIA' ? '#50a4c2'
          : project.campo === 'NAVEGACION' ? '#A83739' : '#c25095';

  return (
    <Box sx={{ display: 'flex', flexDirection:{xs:'column',md:'column',lg:'row'},alignItems:{xs:'center',md:'center'}, paddingLeft: { xs: '2vw', sm: '2vw', md: '2vw', lg:'3vw', xl:'15vw' },alignItems:{md:'center'} ,paddingBottom: {xs:'3vh', md:'3vh'} }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'column', lg:'row' }, // Cambia la dirección del flex en pantallas pequeñas
            justifyContent: 'center',
            alignItems: {lg:'center',xl:'center'},
            gap: { xs: '2vh', md: '6vw' },
            backgroundImage: `linear-gradient(${gradientDirection}, ${gradientColor}, transparent)`,
            padding: { xs: '1vh', md: '0',lg:'0' }, // Padding para pantallas pequeñas
            minWidth: { xs: '90vw', sm:'65vw', md: '95vw', lg:'auto' }, // minWidth para pantallas pequeñas
            maxWidth: {xs: '95vw'},
            
          }}
        >
          <Grid>
            <Box
              component={"img"}
              src={path+"proyecto_"+project.campo+".jpg"}
              alt="proyecto"
              sx={{
                            
                objectFit: 'cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                width: { xs: '100%', md: '100%', lg: '100%' }, // Ancho fijo para escritorio y tablet
                height: { xs: 'auto', md: 'auto',lg:'100%' }, // Ajusta la altura de la imagen para que ocupe toda la altura del contenedor
                maxWidth: { xs: '95vw', md: '100%',lg:'100%' } // maxWidth para pantallas pequeñas
            }}
            />
          </Grid>
          <Box
            sx={{
              padding: '5vh',
              display: 'flex',
              flexDirection: 'column',
              gap: '2vh',
              textAlign: 'center', // Alinear el texto al centro en todos los dispositivos
              minWidth: '20vw',
              maxWidth: '95vw',
          }}
          >
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                textAlign: { xs: 'center', md: 'center', lg:'left' }, // Centra el texto en pantallas pequeñas
                minWidth: {md: '20vw'},
              }}
            >
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white', fontSize:{md:'2 rem', lg:'1.5rem'}, maxWidth:{lg:'30vw',xl:'30vw'} }}> Nombre: {project.nombre}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white', fontSize:{md:'2 rem', lg:'1.5rem'} }}> Director: {project.director}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white', fontSize:{md:'2 rem', lg:'1.5rem'} }}> Campo: {project.campo}</Typography>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'between',
                backgroundColor: 'transparent',
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
                  width: { xs: '95%', md: '95%', lg:'auto' }, // Ancho completo en móvil, tamaño automático en tablet y escritorio
                  maxWidth: {lg:'15vw',xl:'10vw'}, // Máximo ancho para asegurar que no se desborde en pantallas pequeñas
              }}
              >
                Ver Proyecto
              </Button> 
              <Button
                onClick={viewModify}
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
                  width: { xs: '95%', md: '95%', lg:'auto' }, // Ancho completo en móvil, tamaño automático en tablet y escritorio
                  maxWidth: {lg:'15vw',xl:'10vw'}, // Máximo ancho para asegurar que no se desborde en pantallas pequeñas
                  marginTop: { xs: '2vh' }, // Margen superior solo en móvil
              }}
              >
                Modificar
              </Button> 
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  };
