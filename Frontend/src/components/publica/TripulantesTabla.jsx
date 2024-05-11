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
import { getTripullantes } from '../../api/nave/nave';


function Row(tripulante) {
    const { row } = tripulante;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          {/* <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell> */}
          <TableCell component="th" scope="row">
            {row.nombre}
          </TableCell>
          <TableCell >{row.apellido}</TableCell>
          <TableCell >{row.campo}</TableCell>
        </TableRow>
        
      </React.Fragment>
    );
  }

  Row.propTypes = {
    row: PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      apellido: PropTypes.string.isRequired,
      campo: PropTypes.string.isRequired,
    }).isRequired,
  };

  export default function TripulantesTabla() {
    const {data} = getTripullantes();
    return (<TableContainer className='flex m4 justify-center' component={Paper}>
    <Table className='flex flex-row md:max-w-xl' aria-label="collapsible table">
      <TableHead className='bg-blue-400 '>
        <TableRow >
          {/* <TableCell /> */}
          <TableCell >Nombre</TableCell>
          <TableCell  >Apellido</TableCell>
          <TableCell >Campo</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((tripulante) => (
          <Row key={tripulante.id} row={tripulante} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}