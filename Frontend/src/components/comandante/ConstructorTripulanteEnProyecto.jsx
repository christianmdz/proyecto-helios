import React from 'react'
import TripulantesEnProyectoTarjeta from './TripulantesEnProyectoTarjeta'
import {getCrewInProject} from '../../api/navenproy/navenproy'

export default function ConstructorTripulanteEnProyecto({projectId}) {
    const {data} = getCrewInProject(projectId);
    

  return (
    <div className='flex flex-col justify-center items-center mt-2'>
        {data?.map((tripulanteProyecto)=> (<TripulantesEnProyectoTarjeta key={tripulanteProyecto.id} tripulanteProyecto={tripulanteProyecto} projectId={projectId}/>))}
    </div>
  )
}
