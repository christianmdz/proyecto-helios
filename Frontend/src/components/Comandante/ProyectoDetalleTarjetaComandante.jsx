import React from 'react'
import { Box, Grid, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { useMediaQuery, useTheme } from '@mui/material';

export default function ProyectoDetalleTarjetaComandante({data, onVerTripulantes, onAsignarTripulantes}) {
    const path = "/src/assets/"

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    
    const gradientDirection = isSmallScreen ? 'to bottom' : 'to right';
    const gradientColor = data.campo === 'LIDER' ? '#DBA44E'
        : data.campo === 'CIENCIA' ? '#74A44E'
        : data.campo === 'INGENIERIA' ? '#50a4c2'
        : data.campo === 'NAVEGACION' ? '#A83739' : '#c25095';

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: { xs: '2vw', sm: '0', md: '0', lg:'3vw', xl:'15vw' }, alignItems: 'center', paddingBottom: {xs:'3vh', md:'3vh'} }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'column',lg:'row' }, // Dirección de columna para todos los dispositivos
                    justifyContent: 'center',
                    gap: { xs: '2vh', md: '6vw' },
                    backgroundImage: `linear-gradient(${gradientDirection}, ${gradientColor}, transparent)`,
                    padding:{xs:'1vh', md:'0',lg:'0'} , // Padding uniforme para todos los dispositivos
                    width: '100%', // Ancho máximo para todas las pantallas
                    maxWidth: '100vw',
                }}
            >
                <Grid>
                    <Box
                        component={"img"}
                        src={path+"proyecto_"+data.campo+".jpg"}
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
                    <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white', fontSize:{md:'2.3rem', lg:'1rem'} }}> Nombre: {data.nombre}</Typography>
                    <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white', fontSize:{md:'2.3rem', lg:'1rem'} }}> Director: {data.director}</Typography>
                    <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white', fontSize:{md:'2.3rem', lg:'1rem'}, }}> Descripción: {data.descripcion}</Typography>
                    <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white', fontSize:{md:'2.3rem', lg:'1rem'}}}> Campo: {data.campo}</Typography>
                    <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white', fontSize:{md:'2.3rem', lg:'1rem'} }}> Email-Director: {data.directorEmail}</Typography>
                    <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white', fontSize:{md:'2.3rem', lg:'1rem'} }}> Fecha de Inicio: {data.fechaInicio}</Typography>
                    <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white', fontSize:{md:'2.3rem', lg:'1rem'} }}> Fecha de Fin: {data.fechaFin}</Typography>
                    <Typography variant="p" sx={{ fontFamily: 'JetBrains Mono', marginBottom: '1rem', color:'white', fontSize:{md:'2.3rem', lg:'1rem'} }}> Etapa: {data.etapa}</Typography>
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
                            onClick={onVerTripulantes}
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
                                maxWidth: {lg:'15vw',xl:'15vw'}, // Máximo ancho para asegurar que no se desborde en pantallas pequeñas
                            }}
                        >
                            Ver Tripulantes
                        </Button>
                        <Button
                            onClick={onAsignarTripulantes}
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
                                maxWidth: {lg:'15vw',xl:'15vw'}, // Máximo ancho para asegurar que no se desborde en pantallas pequeñas
                                marginTop: { xs: '2vh' }, // Margen superior solo en móvil
                            }}
                        >
                            Asignar
                        </Button>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
};
