import React from 'react'

export default function TareaTripulanteTarjeta({task}) {
  return (
    <div className='flex flex-col justify-center bg-blue-700 p-6 shadow-xl m-4 md:max-w-xl  rounded-md' >
      <div className='text-white text-3xl mb-3'>
          <h1 >Nombre: {task.nombre} </h1>
      </div>
      <div className='flex flex-col  md:flex-row'>
      <p className="text-white font-bold  mr-2">Director: </p>
      <p className="text-slate-200 mb-2">{task.responsable}</p>
      </div>
      <div className='flex flex-col  md:flex-row'>
      <p className="text-white font-bold  mr-2">Campo: </p>
      <p className="text-slate-200 mb-2">{task.campo}</p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Descripción:
      </p>
      <p className="text-slate-200 mb-2">
        {task.descripcion}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Frecuencia:
      </p>
      <p className="text-slate-200 mb-2">
        {task.frecuencia}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        E-mail del responsable:
      </p>
      <p className="text-slate-200 mb-2">
          {task.responsableEmail}
      </p>
      </div>
  </div>
  )
}
