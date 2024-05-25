import { AppBar, CssBaseline, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function LoginNav() {

  return (
    <div>
      <CssBaseline />
      <AppBar sx={{ 
        backgroundColor: 'hsla(210, 14%, 7%, 0.6)',
        backdropFilter: 'blur(5px)',
        padding: '1vh',
        }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography component="div" sx={{ flexGrow: 1}}>
            <Button color="inherit" component={Link} to={"/"} sx={{fontFamily:'Orbitron', fontSize:'1.2rem'}}>HELIOS</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}