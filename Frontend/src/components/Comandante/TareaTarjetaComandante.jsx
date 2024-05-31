import React from 'react'
import { Box, Grid, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { useMediaQuery, useTheme } from '@mui/material';

export default function TareaTarjetaComandante({task}) {
    const path = "/src/assets/"


    const viewDetail = () => {
      window.location.href = `/comandante/tareas/${task.id}`;
    }

    const viewModify = () => {
      window.location.href = `modificar-tarea/${task.id}`;   
    }

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const gradientDirection = isSmallScreen ? 'to bottom' : 'to right';
    const gradientColor = task.campo === 'LIDER' ? '#DBA44E'
      : task.campo === 'CIENCIA' ? '#74A44E'
      : task.campo === 'INGENIERIA' ? '#50a4c2'
      : task.campo === 'NAVEGACION' ? '#A83739' : '#c25095';

  
    return (
      <Box sx={{ display: 'flex', paddingLeft: { xs: '2vw', sm: '12vw', md: '4vw', lg:'3vw', xl:'15vw' }, paddingBottom: {xs:'3vh', md:'3vh'} }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: { xs: '2vh', md: '6vw', lg:'auto' },
            backgroundImage: `linear-gradient(${gradientDirection}, ${gradientColor}, transparent)`,
            padding: { xs: '1vh', md: '0' },
            minWidth: { xs: '90vw', sm:'65vw', md: '60vw', },
            maxWidth: {xs: '95vw', lg:'60vw'}
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
              src={path+ "tarea_"+task.campo+".jpg"}
              alt="tripulante"
              sx={{
                objectFit: 'cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                width: '100%', 
                maxWidth: { xs: '95vw', md: 'auto' }
              }}
            />
          </Grid>
          <Box
            sx={{
              padding: '5vh',
              display: 'flex',
              flexDirection: 'column',
              gap: '2vh',
            }}
          >
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                textAlign: { xs: 'center', md: 'left', lg:'left' }, 
                minWidth: {md: '20vw'},
              }}
            >
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color:'white', fontSize: { xs: '1.2rem' } }}> Nombre: {task.nombre}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color:'white', fontSize: { xs: '1.2rem' } }}> Responsable: {task.responsable}</Typography>
              <Typography variant="h4" sx={{ fontFamily: 'JetBrains Mono', color:'white', fontSize: { xs: '1.2rem' } }}> Campo: {task.campo}</Typography>
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
                Ver tarea
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
                  maxWidth: {lg:'15vw', xl:'10vw'}
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
