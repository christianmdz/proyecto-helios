import { AppBar, CssBaseline, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { isAuthenticated } from "../../api/auth/auth";

export default function HomeNav({ scrollToCirce, scrollToCeres, scrollToCrew}) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [isAuth, setIsAuth] = useState(isAuthenticated())

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
          <Typography component="div" sx={{ flexGrow: 1}}>
            <Button color="inherit" component={Link} to={"/"} sx={{fontFamily:'Orbitron', fontSize:'1.2rem'}}>HELIOS</Button>
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
              <MenuItem onClick={scrollToCirce}>Circe</MenuItem>
              <MenuItem onClick={scrollToCeres}>Ceres</MenuItem>
              <MenuItem onClick={scrollToCrew}>Crew</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/login">Login</MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" onClick={scrollToCirce}>Circe</Button>
            <Button color="inherit" onClick={scrollToCeres}>Ceres</Button>
            <Button color="inherit" onClick={scrollToCrew}>Crew</Button>
            {!isAuth
              ? <Button color="inherit" component={Link} to={"/login"}>Login</Button>
              : <Button color="inherit" component={Link} to={"/comandante"}>Comandante</Button>}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}