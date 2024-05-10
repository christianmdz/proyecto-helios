import React from 'react';
import { Box, Typography } from '@mui/material';

const MainBody = ({ selectedComponent }) => {
  return (
    <Box>
      {/* Imagen temática */}
      <Box sx={{ textAlign: 'center', my: 4 }}>
        {/* Aquí puedes poner la imagen temática */}
        <img src="url_de_la_imagen" alt="Imagen temática" style={{ maxWidth: '100%', maxHeight: '400px' }} />
      </Box>

      {/* Componente seleccionado desde el TaskBar */}
      <Box>
        {/* Mostrar el componente seleccionado */}
        {selectedComponent && <selectedComponent />}
        {!selectedComponent && (
          <Typography variant="h6" align="center">
            Seleccione una opción del TaskBar
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default MainBody;
