import React from 'react'

export default function TablaTripulantes({tripulante}) {
  return (
    <div>
        <div className='flex flex-col justify-center bg-blue-400 p-6 shadow-xl m-4 md:max-w-xl hover:bg-blue-700 rounded-md'>
            <div className='text-white text-xl font-bold'>Nombre: {tripulante.nombre}</div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='text-white'>Campo: {tripulante.campo}</div>
                <div className='text-white'>Rol: {tripulante.rol}</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}
