import React from 'react'

export default function NaveTarjeta({data}) {
  
  return (
    <div className='flex flex-col justify-center bg-blue-400 p-6 shadow-xl m-4 md:max-w-xl hover:bg-blue-700 rounded-md' >
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <div className='text-white text-3xl mb-3'>
                <h1 >{data.nombre}</h1>
            </div>
            <div className='flex flex-col  md:flex-row'>
            <p className="text-white font-bold  mr-2">Comandante: </p>
            <p className="text-slate-200 mb-2">{data.comandante}</p>
            </div>
            <div className='flex flex-col md:flex-row'>
            <p className="text-white font-bold mr-2">
              Flota:
            </p>
            <p className="text-slate-200 mb-2">
              {data.afiliacion}
            </p>
            </div>
            <div className='flex flex-col md:flex-row'>
            <p className="text-white font-bold mr-2">
              Motor:
            </p>
            <p className="text-slate-200 mb-2">
              {data.motor}
            </p>
            </div>
            <div className='flex flex-col md:flex-row'>
            <p className="text-white font-bold mr-2">
              Tripulación:
            </p>
            <p className="text-slate-200 mb-2">
              {data.tripulacion}
            </p>
            </div>
            <div className='flex flex-col md:flex-row'>
            <p className="text-white font-bold mr-2">
              Carga:
            </p>
            <p className="text-slate-200 mb-2">
              {data.carga}
            </p>
            </div>
            {/* <Button variant="primary">Go somewhere</Button> */}
        </div>
  )
}