import React from 'react'
import ModificarTarea from './ModificarTarea';
import { useParams } from 'react-router-dom';
import { getOneTask } from '../../api/tareas/tareas';

export default function ConstructorModificarTarea() {
    let id = useParams();
    const {data} = getOneTask(id.id);
    
  return (
    <div className='flex flex-col justify-center items-center mt-2'>
    {data &&  <ModificarTarea key={data.id} data={data}/>}
    </div>
  )
}
