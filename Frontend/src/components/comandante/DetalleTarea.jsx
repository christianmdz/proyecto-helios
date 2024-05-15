import React from 'react'


export default function DetalleTarea({data, onVerTripulantes, onAsignarTripulantes}) {
    
  return (
    <div className='flex flex-col justify-center bg-blue-700 p-6 shadow-xl m-4 md:max-w-xl  rounded-md' >
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <div className='text-white text-3xl mb-3'>
          <h1 >{data.nombre}</h1>
      </div>
      <div className='flex flex-col  md:flex-row'>
      <p className="text-white font-bold  mr-2">Responsalbe: </p>
      <p className="text-slate-200 mb-2">{data.responsable}</p>
      </div>
      <div className='flex flex-col  md:flex-row'>
      <p className="text-white font-bold  mr-2">Descripción: </p>
      <p className="text-slate-200 mb-2">{data.descripcion}</p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        E-mail Responsalbe:
      </p>
      <p className="text-slate-200 mb-2">
        {data.responsableEmail}
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
        Frecuencia:
      </p>
      <p className="text-slate-200 mb-2">
        {data.frecuencia}
      </p>
      </div>
      <div className='flex flex-col justify-center md:flex-row'>
        <button className='m-2 bg-white p-2 rounded-md text-cyan-600 hover:bg-slate-100 hover:text-cyan-800 hover:font-semibold' onClick={onVerTripulantes} >Ver triuplantes</button>
        <button className='m-2 bg-white p-2 rounded-md text-cyan-600 hover:bg-slate-100 hover:text-cyan-800 hover:font-semibold'onClick={onAsignarTripulantes}>Alta de tripulante</button>
        
      </div>
  </div>
  )
}
