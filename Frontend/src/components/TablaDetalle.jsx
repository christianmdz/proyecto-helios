import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const formatearRol = (rol) => {
  const rolSinRole = rol.substring(5).toLowerCase();
  return rolSinRole.charAt(0).toUpperCase() + rolSinRole.slice(1);
}

function Row(props) {
  const { tripulante } = props;
  const [open, setOpen] = React.useState(false);
  console.log(tripulante.nombre)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align='right'>{tripulante.nombre}</TableCell>
        <TableCell align='right'>{formatearRol(tripulante.rol)}</TableCell>
        <TableCell align='right'>{tripulante.campo}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, minWidth:'35vw' }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align='right'>Apellido</TableCell>
                    <TableCell align='right'>Username</TableCell>
                    <TableCell align='right'>Email</TableCell>
                    <TableCell align='right'>Nave</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                  <TableCell align='right'>{tripulante.apellido}</TableCell>
                  <TableCell align='right'>{tripulante.username}</TableCell>
                  <TableCell align='right'>{tripulante.email}</TableCell>
                  <TableCell align='right'>{tripulante.nave}</TableCell>
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
  console.log("TablaDetalle, collapsibletable" + tripulacion)
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align='right'>Nombre</TableCell>
            <TableCell align="right">Rango</TableCell>
            <TableCell align="right">Campo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tripulacion.map((tripulante) => (
            <Row key={tripulante.name} tripulante={tripulante} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}