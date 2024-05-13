import { AppBar, CssBaseline, Toolbar, Typography, Box } from "@mui/material";
import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export default function HomeNav() {
  return (
    <div>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: 'hsla(210, 14%, 7%, 0.8)', backdropFilter: 'blur(8px)' }}>
        <Toolbar>
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily:'Dune' }}
          >
            HELIOS
          </Typography>
        </Toolbar>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button>Login</Button>
        </Box>
      </AppBar>
    </div>
  )
}