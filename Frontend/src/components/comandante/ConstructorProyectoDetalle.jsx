import React from 'react'
import { useParams } from 'react-router-dom'
import { getOneProject } from '../../api/proyectos/proyectos'
import DetalleProyecto from './DetalleProyecto'

export default function ConstructorProyectoDetalle() {
    let id = useParams();
    const  {data} = getOneProject(id.id);

    const handleVolver = () => {
        window.location.href = `/comandante/proyectosComandante`;   
    }

  return (
    <div className='flex flex-col justify-center items-center mt-2'>
            {data &&  <DetalleProyecto key={data.id} data={data}/>}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleVolver} >Volver</button>
        </div>
  )
}
