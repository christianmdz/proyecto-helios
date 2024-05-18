import React from 'react';
import { Box, Typography } from '@mui/material';
import RegistroForm from 'components/RegistroForm';


export default function RegisterPage() {
  return (
    <Box
      sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        margin: '3vh'
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)' }}> Launch</Typography>
      <RegistroForm />
    </Box>
  );
}