import { taskInCrew } from '../../api/navegantes/navegantes';
import React from 'react'
import TareaTripulanteTarjeta from './TareaTripulanteTarjeta'

export default function ConstructorTareasDeTripulante({idNavegante}) {

    const {data} = taskInCrew(idNavegante);

  return (
    <div className='flex flex-col justify-center items-center mt-2'>
        {data?.map((task)=> (<TareaTripulanteTarjeta key={task.id} task={task} />))}
    </div>
  )
}
