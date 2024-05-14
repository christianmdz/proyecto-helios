import React from 'react'
import { useParams } from 'react-router-dom'
import { getOneProject } from '../../api/proyectos/proyectos'
import ModificarProyecto from './ModificarProyecto'


export default function ConstructorModificarProyecto() {
    let id = useParams();
    const {data} = getOneProject(id.id);


  return (
    <div className='flex flex-col justify-center items-center mt-2'>
    {data &&  <ModificarProyecto key={data.id} data={data}/>}
    </div>
  )
}
