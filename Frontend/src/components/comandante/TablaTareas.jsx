
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import React from "react";
import { getAllTasks } from "../../api/tareas/tareas";
import { Link } from "react-router-dom";



function Row(tarea) {
    const { row } = tarea;
    const viewDetail = () => {
        window.location.href = `tareasComandante/${row.id}`;   
    }
    const viewModify = () => {
        window.location.href = `modificarTareaComandante/${row.id}`;   
    }
    const deleteTarea = () => {  
        console.log(row.id);
    }    

    

    return (
      <React.Fragment>
        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-xs">    
            <TableCell>{row.nombre}</TableCell>
            <TableCell>{row.responsable}</TableCell>
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
              
            <TableCell className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={deleteTarea}  >
                Eliminar
            </TableCell>
          </TableRow>
      </React.Fragment>
    );
} 

   

export function TablaTareas() {

    

    const {data} = getAllTasks();
    
    const viewCreate = () => {
        window.location.href = `/comandante/crearTareaComandante`;   
    }


  return (
    <div className='flex flex-col justify-center items-center mt-2'> 
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={viewCreate} >
              Nueva Tarea </button>    
        </div>  
        <div className="overflow-x-auto md:max-w-3xl m-4 justify-center items-center">
        <Table hoverable>
        <TableHead>
            <TableHeadCell>Nombre</TableHeadCell>
            <TableHeadCell>Responsable</TableHeadCell>
            <TableHeadCell>Campo</TableHeadCell>
            <TableHeadCell>Ver Detalle</TableHeadCell>
            <TableHeadCell>Modificar</TableHeadCell>
            <TableHeadCell>Eliminar</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
                {data?.map((tarea) => (
                    <Row key={tarea.id} row={tarea}  />
                ))}
            </TableBody>
        </Table>
        </div>
    </div> 
  );
}
