import { useNavigate } from 'react-router-dom';
import { deleteCrewInProject } from '../../api/navenproy/navenproy';
import React from 'react'

export default function TripulantesEnProyectoTarjeta({tripulanteProyecto, projectId}) {
  const idProyecto = projectId;
  const idNavegante = tripulanteProyecto.id;
  const navigate = useNavigate();

  const handleEliminarTripulante = () => {
    deleteCrewInProject(idProyecto, idNavegante);
    navigate(`/comandante/proyectosComandante`);
  }

  return (
    <div className='flex flex-col justify-center bg-blue-700 p-6 shadow-xl m-4 md:max-w-xl  rounded-md' >
      <div className='text-white text-3xl mb-3'>
          <h1 >Protestato: {tripulanteProyecto.nombre} </h1>
      </div>
      <div className='flex flex-col  md:flex-row'>
      <p className="text-white font-bold  mr-2">Apellido: </p>
      <p className="text-slate-200 mb-2">{tripulanteProyecto.apellido}</p>
      </div>
      <div className='flex flex-col  md:flex-row'>
      <p className="text-white font-bold  mr-2">Nombre de usuario: </p>
      <p className="text-slate-200 mb-2">{tripulanteProyecto.username}</p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        E-mail :
      </p>
      <p className="text-slate-200 mb-2">
        {tripulanteProyecto.email}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Campo:
      </p>
      <p className="text-slate-200 mb-2">
          {tripulanteProyecto.campo}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Mando del tripulante:
      </p>
      <p className="text-slate-200 mb-2">
        {tripulanteProyecto.rol}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Fecha de Incorporación:
      </p>
      <p className="text-slate-200 mb-2">
        {tripulanteProyecto.fechaIncorporacion}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Días asignados al proyecto:
      </p>
      <p className="text-slate-200 mb-2">
        {tripulanteProyecto.diasAsignados}
      </p>
      </div>
      <button className='m-2 bg-white p-2 rounded-md text-cyan-600 hover:bg-slate-100 hover:text-cyan-800 hover:font-semibold'onClick={handleEliminarTripulante}>Baja de tripulante</button>
      
  </div>
  )
}
