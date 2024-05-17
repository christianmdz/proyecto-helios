import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';
import { getTripulante } from '../api/navegantes/navegantes';
import '../styles/comandante.css'

const formatearRol = (rol) => {
  const rolSinRole = rol.substring(5).toLowerCase();
  return rolSinRole.charAt(0).toUpperCase() + rolSinRole.slice(1);
}

const handleVerClick = async (idTripulante) => {
  try {
    const tripulante = await getTripulante(idTripulante);
    console.log(tripulante)
  } catch (error) {
    console.error('Error al obtener el tripulante:', error);
  }
};

function Row(props) {
  const { tripulante } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{'& > *': { borderBottom: 'unset' } }}>
        <TableCell className='tablaDetalle-style'>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{
              backgroundColor: 'transparent',
              color: 'white', // Establecer el color del icono en blanco
              transition: 'background-color 0.3s ease',
              '&:hover': {
                // backgroundColor: 'white',
                boxShadow: '0px 1px 3px white',
              },
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className='tablaDetalle-style' align='right'>{tripulante.nombre}</TableCell>
        <TableCell className='tablaDetalle-style' align='right'>{formatearRol(tripulante.rol)}</TableCell>
        <TableCell className='tablaDetalle-style' align='right'>{tripulante.campo}</TableCell>
        <TableCell sx={{textAlign:'right'}}>
        <Button
          onClick={() => handleVerClick(tripulante.id)}
          type="button"
          variant="contained"
          sx={{
            backgroundColor: 'indigo',
            color: 'white',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: 'darkviolet',
              boxShadow: '0px 4px 8px rgba(138, 43, 226, 0.5)',
            },

          }}
          >
          Ver
        </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, minWidth:'35vw' }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow className='tablaDetalle-style'>
                    <TableCell className='tablaDetalle-style' align='right'>Apellido</TableCell>
                    <TableCell className='tablaDetalle-style' align='right'>Username</TableCell>
                    <TableCell className='tablaDetalle-style' align='right'>Email</TableCell>
                    <TableCell className='tablaDetalle-style' align='right'>Nave</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                  <TableCell className='tablaDetalle-style' align='right'>{tripulante.apellido}</TableCell>
                  <TableCell className='tablaDetalle-style' align='right'>{tripulante.username}</TableCell>
                  <TableCell className='tablaDetalle-style' align='right'>{tripulante.email}</TableCell>
                  <TableCell className='tablaDetalle-style' align='right'>{tripulante.nave}</TableCell>
                </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable(props) {
  const { tripulacion } = props
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '800px', margin: 'auto', backgroundColor: '#fff0' }}>
      <Table aria-label="collapsible table" sx={{ backgroundColor: '#fff0'}}>
        <TableHead sx={{backgroundImage: 'linear-gradient(to bottom, indigo, transparent)'}}>
          <TableRow>
            <TableCell className='tablaDetalle-style'/>
            <TableCell className='tablaDetalle-style' align='right'>Nombre</TableCell>
            <TableCell className='tablaDetalle-style' align="right">Rango</TableCell>
            <TableCell className='tablaDetalle-style' align="right">Campo</TableCell>
            <TableCell className='tablaDetalle-style' align="right">Detalle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tripulacion.map((tripulante) => (
            <Row key={tripulante.id} tripulante={tripulante} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}