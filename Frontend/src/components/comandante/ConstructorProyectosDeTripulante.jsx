import React from 'react'
import { projectInCrew }  from '../../api/navegantes/navegantes'
import ProyectoTripulanteTarjeta from './ProyectoTripulanteTarjeta'

export default function ConstructorProyectosDeTripulante({idNavegante}) {

    const {data} = projectInCrew(idNavegante);

  return (
    <div className='flex flex-col justify-center items-center mt-2'>
        {data?.map((project)=> (<ProyectoTripulanteTarjeta key={project.id} project={project} />))}
    </div>
  )
}
