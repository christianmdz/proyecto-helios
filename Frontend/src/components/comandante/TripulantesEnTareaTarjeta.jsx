
import { deleteCrewInTask } from '../../api/naventarea/naventarea';
import React from 'react'

export default function TripulantesEnTareaTarjeta({tripulanteTarea, taskId}) {

  const idTarea = taskId;
  const idNavegante = tripulanteTarea.id;

  const handleEliminarTripulante = () => {
    deleteCrewInTask(idTarea, idNavegante);
  }


  return (
    <div className='flex flex-col justify-center bg-blue-700 p-6 shadow-xl m-4 md:max-w-xl  rounded-md' >
      <div className='text-white text-3xl mb-3'>
          <h1 >Nombre: {tripulanteTarea.nombre} </h1>
      </div>
      <div className='flex flex-col  md:flex-row'>
      <p className="text-white font-bold  mr-2">Apellido: </p>
      <p className="text-slate-200 mb-2">{tripulanteTarea.apellido}</p>
      </div>
      <div className='flex flex-col  md:flex-row'>
      <p className="text-white font-bold  mr-2">Nombre de usuario: </p>
      <p className="text-slate-200 mb-2">{tripulanteTarea.username}</p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        E-mail :
      </p>
      <p className="text-slate-200 mb-2">
        {tripulanteTarea.email}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Campo:
      </p>
      <p className="text-slate-200 mb-2">
          {tripulanteTarea.campo}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Mando del tripulante:
      </p>
      <p className="text-slate-200 mb-2">
        {tripulanteTarea.rol}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Fecha de Incorporación:
      </p>
      <p className="text-slate-200 mb-2">
        {tripulanteTarea.fechaIncorporacion}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Jornada:
      </p>
      <p className="text-slate-200 mb-2">
        {tripulanteTarea.jornada}
      </p>
      </div>
      <div className='flex flex-col md:flex-row'>
      <p className="text-white font-bold mr-2">
        Asignación en la tarea:
      </p>
      <p className="text-slate-200 mb-2">
        {tripulanteTarea.asignacion}
      </p>
      </div>
      <button className='m-2 bg-white p-2 rounded-md text-cyan-600 hover:bg-slate-100 hover:text-cyan-800 hover:font-semibold'onClick={handleEliminarTripulante}>Baja de tripulante</button>
      
  </div>
  )
}
