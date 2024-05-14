import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'

export default function CabeceraComandante() {

    
    const {logout} = useLogout();
    

  return (
    <>
    <div className='bg-blue-700 shadow px-6'  style={{ zIndex: '9999' }}>
        <div className='flex justify-between h-16 max-w-3xl mx-auto items-center'>
            <div className='flex -mr-4 items-center'>
              <a href='#' className='text-white hover:text-slate-50 hover:rotate-6 duration-200'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
              </a>
              
            </div>
            <div className='space-x-8 ml-8 hidden md:flex'>
              <Link className='px-3 py-2 hover:text-slate-300' to="">Home</Link>
              <Link className='text-white px-3 py-2 hover:text-slate-300 transition-colors ' to="proyectos">Proyectos</Link>
              <Link className='text-white px-3 py-2 hover:text-slate-300 transition-colors ' to="tareasComandante">Tareas</Link>
              <Link className='text-white px-3 py-2 hover:text-slate-300 transition-colors ' to="tripulantesComandante">Tripulantes</Link>
              <Link className='text-white px-3 py-2 hover:text-slate-300 transition-colors ' to="informacion">Información</Link>
            </div>
            <div className='flex'>
              <button onClick={logout}>
                <Link to="/login">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-4 text-white hover:text-slate-500 rounded-full focus:ring-2 focus:ring-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  <p className='font-thin text-white'>Username</p>
                </Link>
              </button>
            </div>
        </div>
        <div id='footer' className='bg-blue-700 flex pb-3 border-t pt-2 md:hidden justify-between max-w-3xl mx-auto items-center'  style={{ zIndex: '9999' }} >
          <Link to="/" className=' text-white hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-md  '>Home</Link>
          <Link to="/proyectos" className='text-white hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-md transition-colors'>Proyectos</Link>
          <Link to="/tareas" className='text-white hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-md transition-colors'>Tareas</Link>
          <Link to="/tripulantes" className='text-white hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-md transition-colors'>Tripulantes</Link>
          <Link to="/informacion" className='text-white hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-md transition-colors'>Información</Link>
        </div>
    </div>
    <Outlet />
    </>
  )
}
