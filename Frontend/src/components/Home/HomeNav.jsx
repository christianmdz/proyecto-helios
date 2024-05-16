import { AppBar, CssBaseline, Toolbar, Typography, Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function HomeNav() {
  return (
    <div>
      <CssBaseline />
      <AppBar sx={
        { 
          backgroundColor: 'hsla(210, 14%, 7%, 0.6)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          flexDirection: 'row',
          alignItems:'center',
          justifyContent:'space-between',
          padding: '1vh' 
        }
      }>
        <Toolbar>
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily:'Orbitron' }}
          >
            HELIOS
          </Typography>
        </Toolbar>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit">Circe</Button>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit">Ceres</Button>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit">Crew</Button>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit">Login</Button>
        </Box>
      </AppBar>
    </div>
  )
}