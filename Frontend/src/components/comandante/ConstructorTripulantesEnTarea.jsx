import React from 'react'
import TripulantesEnTareaTarjeta from './TripulantesEnTareaTarjeta'
import {getCrewInTask} from '../../api/naventarea/naventarea'


export default function ConstructorTripulantesEnTarea({taskId}) {

    const {data} = getCrewInTask(taskId);
    

  return (
    <div className='flex flex-col justify-center items-center mt-2'>
        {data?.map((tripulanteTarea)=> (<TripulantesEnTareaTarjeta key={tripulanteTarea.id} tripulanteTarea={tripulanteTarea} taskId={taskId}/>))}
    </div>
  )
}
