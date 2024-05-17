import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from "react-router-dom";
import { getAllCrew } from '../../api/navegantes/navegantes';

function Row(tripulante) {
    const { row } = tripulante;
    const viewDetail = () => {
        window.location.href = `tripulantesComandante/${row.id}`;   
    }
    

    

    return (
      <React.Fragment>
        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-xs">    
            <TableCell>{row.nombre}</TableCell>
            <TableCell>{row.apellido}</TableCell>
            <TableCell>{row.campo}</TableCell>
            <TableCell>
              <Link to="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={viewDetail}>
                Ver detalle
              </Link>
            </TableCell>
            
          </TableRow>
      </React.Fragment>
    );
}

export default function TablaTripulantes() {
    const {data} = getAllCrew();
    

  return(  
    <div className='flex flex-col justify-center items-center mt-2'> 
         
        <div className="overflow-x-auto md:max-w-3xl m-4 justify-center items-center">
        <Table hoverable>
        <TableHead>
            <TableHeadCell>Nombre</TableHeadCell>
            <TableHeadCell>Apellido</TableHeadCell>
            <TableHeadCell>Campo</TableHeadCell>
            <TableHeadCell>Ver Detalle</TableHeadCell>
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
