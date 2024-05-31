import { AppBar, CssBaseline, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export default function ComandanteNav() {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
      };
    
    const handleHelios = () => {
        navigate('/comandante');
    }
  
    return (
      <div>
        <CssBaseline />
        <AppBar sx={{ 
          backgroundColor: 'hsla(210, 14%, 7%, 0.6)',
          backdropFilter: 'blur(5px)',
          padding: '1vh',
          }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" onClick={handleHelios} component="div"  sx={{ flexGrow: 1, fontFamily:'Orbitron', cursor:'pointer' }} >
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
                MenuListProps={{ sx: { backgroundColor: '#0000008f', backdropFilter: 'blur(5px)', color: 'white', fontFamily: 'Orbitron' } }}
                PaperProps={{ sx: { backgroundColor: '#0000008f', backdropFilter: 'blur(5px)' } }}
              >
                 <MenuItem component={Link} to="tripulacion" sx={{ fontFamily: 'Orbitron' }}>Tripulación</MenuItem>
                  <MenuItem component={Link} to="tareas" sx={{ fontFamily: 'Orbitron' }}>Tareas</MenuItem>
                  <MenuItem component={Link} to="proyectos" sx={{ fontFamily: 'Orbitron' }}>Proyectos</MenuItem>
                  <MenuItem onClick={handleLogout} sx={{ fontFamily: 'Orbitron' }}>Cerrar Sesión</MenuItem>
              </Menu>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button color="inherit" component={Link} to="tripulacion" >Tripulación</Button>
              <Button color="inherit" component={Link} to="tareas" >Tareas</Button>
              <Button color="inherit" component={Link} to="proyectos">Proyectos</Button>
              <Button color="inherit" onClick={handleLogout}>Cerrar sesión</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
