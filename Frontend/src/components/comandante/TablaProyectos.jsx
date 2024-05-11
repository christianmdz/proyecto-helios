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
import { getAllProjects } from '../../api/proyectos/proyectos';

function Row(proyecto) {
    const { row } = proyecto;
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
          <TableCell >{row.director}</TableCell>
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


export default function TablaProyectos() {
    const {data} = getAllProjects();

    return (<TableContainer className='flex m4 justify-center' component={Paper}>
    <Table className='flex flex-row md:max-w-xl' aria-label="collapsible table">
      <TableHead className='bg-blue-400 '>
        <TableRow >
          {/* <TableCell /> */}
          <TableCell >Nombre</TableCell>
          <TableCell  >Director</TableCell>
          <TableCell >Campo</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((proyecto) => (
          <Row key={proyecto.id} row={proyecto} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}