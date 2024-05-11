import React from 'react'

export default function MisionTarjeta({data}) {
  return (
    <div className='flex flex-col justify-center bg-blue-400 p-6 shadow-xl m-4 md:max-w-xl hover:bg-blue-700 rounded-md' >
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <div className='text-white text-3xl mb-3'>
          <h1 >{data.nombre}</h1>
      </div>
      <div className='flex flex-col  md:flex-row'>
      <p className="text-white font-bold  mr-2">Flota: </p>
      <p className="text-slate-200 mb-2">{data.destino}</p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Descripción:
      </p>
      <p className="text-slate-200 mb-2">
          {data.descripcion}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Duración estimada:
      </p>
      <p className="text-slate-200 mb-2">
        {data.duracion}
      </p>
      </div>
      {/* <Button variant="primary">Go somewhere</Button> */}
  </div>
  )
}
