import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { getTripullantes } from '../../api/nave/nave';


function Row(tripulante) {
  const { row } = tripulante;
  
  return (
    <React.Fragment>
      <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-xs">    
          <TableCell>{row.nombre}</TableCell>
          <TableCell>{row.apellido}</TableCell>
          <TableCell>{row.campo}</TableCell>
        </TableRow>
    </React.Fragment>
  );
}

export default function TripulantesTabla() {
  const {data} = getTripullantes();

  return (
    <div className='flex flex-col justify-center items-center mt-2'>  
        <div className="overflow-x-auto md:max-w-3xl m-4 justify-center items-center">
        <Table hoverable>
        <TableHead>
            <TableHeadCell>Nombre</TableHeadCell>
            <TableHeadCell>Apellido</TableHeadCell>
            <TableHeadCell>Campo</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
                {data?.map((tripulante) => (
                    <Row key={tripulante.id} row={tripulante}  />
                ))}
            </TableBody>
        </Table>
        </div>
    </div>
)
}