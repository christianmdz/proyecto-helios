import React from 'react';
import Button from '@mui/material/Button';

export default function MainTaskBar() {
  const handleClick = (functionName) => {
    console.log(`Clicked on ${functionName}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: 'blue'}}>
      <Button variant="outlined" onClick={() => handleClick('Nave')}>Nave</Button>
      <Button variant="outlined" onClick={() => handleClick('Misión')}>Misión</Button>
      <Button variant="outlined" onClick={() => handleClick('Tripulación')}>Tripulación</Button>
    </div>
  );
}
