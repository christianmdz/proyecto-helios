import React from 'react'

export default function DetalleTripulante({data, onVerProyectos, onVerTareas}) {
  return (
    <div className='flex flex-col justify-center bg-blue-700 p-6 shadow-xl m-4 md:max-w-xl  rounded-md' >
    
      <div className='text-white text-3xl mb-3'>
          <h1 >Tripulante: {data.nombre}</h1>
      </div>
      <div className='flex flex-col  md:flex-row'>
      <p className="text-white font-bold  mr-2">Username: </p>
      <p className="text-slate-200 mb-2">{data.username}</p>
      </div>
      <div className='flex flex-col  md:flex-row'>
      <p className="text-white font-bold  mr-2">Apellido: </p>
      <p className="text-slate-200 mb-2">{data.apellido}</p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        E-mail:
      </p>
      <p className="text-slate-200 mb-2">
        {data.email}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Mando del Tripulante:
      </p>
      <p className="text-slate-200 mb-2">
          {data.rol}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Campo:
      </p>
      <p className="text-slate-200 mb-2">
        {data.campo}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Nave a la que pertenece:
      </p>
      <p className="text-slate-200 mb-2">
        {data.nave}
      </p>
      </div>
      <button className='m-2 bg-white p-2 rounded-md text-cyan-600 hover:bg-slate-100 hover:text-cyan-800 hover:font-semibold' onClick={onVerProyectos} >Ver Proyectos</button>
      <button className='m-2 bg-white p-2 rounded-md text-cyan-600 hover:bg-slate-100 hover:text-cyan-800 hover:font-semibold' onClick={onVerTareas}  >Ver Tareas</button>
  </div>
  )
}
