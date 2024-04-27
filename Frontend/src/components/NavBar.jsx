import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import {NavLink} from 'react-router-dom'



export default function NavBar() {
  const [value, setValue] = React.useState(0);

  return (
    
    <Box  sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Nave" icon={<RocketLaunchIcon />} component={NavLink} to='/nave'/>
        <BottomNavigationAction label="Tripulacion" icon={<TransferWithinAStationIcon />} component={NavLink} to='/tripulacion'/>
        <BottomNavigationAction label="Mision" icon={<EmojiPeopleIcon />} component={NavLink} to='/mision'/> 
        <BottomNavigationAction label="Singin" icon={<TransferWithinAStationIcon />} component={NavLink} to='/singin'/>  
      </BottomNavigation>
    </Box>
    
  );
}