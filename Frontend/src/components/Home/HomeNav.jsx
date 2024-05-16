import { AppBar, CssBaseline, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export default function HomeNav({ scrollToCirce, scrollToCeres, scrollToCrew}) {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar sx={{ 
        backgroundColor: 'hsla(210, 14%, 7%, 0.6)',
        backdropFilter: 'blur(5px)',
        padding: '1vh',
        }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:'Orbitron' }}>
            HELIOS
          </Typography>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton color="inherit" onClick={handleMenuOpen} edge="start">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Circe</MenuItem>
              <MenuItem onClick={handleMenuClose}>Ceres</MenuItem>
              <MenuItem onClick={handleMenuClose}>Crew</MenuItem>
              <MenuItem onClick={handleMenuClose}>Login</MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" onClick={scrollToCirce}>Circe</Button>
            <Button color="inherit" onClick={scrollToCeres}>Ceres</Button>
            <Button color="inherit" onClick={scrollToCrew}>Crew</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}