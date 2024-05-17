import React from 'react';
import LoginForm from '../components/LoginForm';
import { Box, Typography } from '@mui/material';


export default function LoginPage() {
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
      <LoginForm />
    </Box>
  );
}