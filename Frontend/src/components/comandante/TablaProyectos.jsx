import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from "react-router-dom";
import { getAllProjects } from '../../api/proyectos/proyectos';

function Row(proyecto) {
    const { row } = proyecto;
    const viewDetail = () => {
        window.location.href = `proyectosComandante/${row.id}`;   
    }
    const viewModify = () => {
        window.location.href = `modificarProyectoComandante/${row.id}`;   
    }
    const deleteOne = () => {  
        console.log(row.id);
    }    

    

    return (
      <React.Fragment>
        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-xs">    
            <TableCell>{row.nombre}</TableCell>
            <TableCell>{row.director}</TableCell>
            <TableCell>{row.campo}</TableCell>
            <TableCell>
              <Link to="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={viewDetail}>
                Ver detalle
              </Link>
            </TableCell>
            <TableCell>
            <Link to="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={viewModify}>
                Modificar
              </Link>
            </TableCell>
              
            <TableCell className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={deleteOne}  >
                Eliminar
            </TableCell>
          </TableRow>
      </React.Fragment>
    );
} 


export default function TablaProyectos() {

    const {data} = getAllProjects();
    const viewCreate = () => {
        window.location.href = `/comandante/crearProyectoComandante`;   
    }

  return (
    <div className='flex flex-col justify-center items-center mt-2'> 
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={viewCreate} >
              Nueva Proyecto </button>    
        </div>  
        <div className="overflow-x-auto md:max-w-3xl m-4 justify-center items-center">
        <Table hoverable>
        <TableHead>
            <TableHeadCell>Nombre</TableHeadCell>
            <TableHeadCell>Director</TableHeadCell>
            <TableHeadCell>Campo</TableHeadCell>
            <TableHeadCell>Ver Detalle</TableHeadCell>
            <TableHeadCell>Modificar</TableHeadCell>
            <TableHeadCell>Eliminar</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
                {data?.map((proyecto) => (
                    <Row key={proyecto.id} row={proyecto}  />
                ))}
            </TableBody>
        </Table>
        </div>
    </div> 
  );
}
