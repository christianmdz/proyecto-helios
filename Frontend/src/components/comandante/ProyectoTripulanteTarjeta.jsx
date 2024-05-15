import React from 'react'

export default function ProyectoTripulanteTarjeta({project}) {
  return (
    <div className='flex flex-col justify-center bg-blue-700 p-6 shadow-xl m-4 md:max-w-xl  rounded-md' >
      <div className='text-white text-3xl mb-3'>
          <h1 >Nombre: {project.nombre} </h1>
      </div>
      <div className='flex flex-col  md:flex-row'>
      <p className="text-white font-bold  mr-2">Director: </p>
      <p className="text-slate-200 mb-2">{project.director}</p>
      </div>
      <div className='flex flex-col  md:flex-row'>
      <p className="text-white font-bold  mr-2">Campo: </p>
      <p className="text-slate-200 mb-2">{project.campo}</p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Descripción:
      </p>
      <p className="text-slate-200 mb-2">
        {project.descripcion}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        E-mail del director:
      </p>
      <p className="text-slate-200 mb-2">
          {project.directorEmail}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Fecha de inicio:
      </p>
      <p className="text-slate-200 mb-2">
        {project.fechaInicio}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Fecha de Fin:
      </p>
      <p className="text-slate-200 mb-2">
        {project.fechaFin}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Etapa del proyecto:
      </p>
      <p className="text-slate-200 mb-2">
        {project.etapa}
      </p>
      </div> 
  </div>
  )
}
