import React from 'react'
import { useState } from 'react';

import {updateTask } from '../../api/tareas/tareas';

export default function ModificarTarea({data}) {

    const [id, setId] = useState(data.id);
    const [nombre, setNombre] = useState(data.nombre);
    const [responsable, setResponsable] = useState(data.responsable);
    const [frecuencia, setFrecuencia] = useState(data.frecuencia);
    const [campo, setCampo] = useState(data.campo);
    const [responsableEmail, setResponsableEmail] = useState(data.responsableEmail);

    console.log(data.id);

    const handleModificar = (e) => {
        e.preventDefault();
        
        const updateData = {id:id, nombre: nombre, responsable: responsable, frecuencia: frecuencia, campo: campo, responsableEmail: responsableEmail}
        console.log(updateData);
        updateTask(updateData);
        window.location.href = `/comandante/tareasComandante`;   
    }

  return (
    <div className='flex flex-col justify-center items-center mt-2'>
        <div className="flex flex-col  md:max-w-xl m-4 " >
            <form onSubmit={handleModificar} >
                <div className="mb-3">
                    <label htmlFor="nombre" className=" text-sm font-semibold leading-6 text-gray-900">Nombre de la tarea</label>
                    <input onChange={(e)=>{setNombre(e.target.value)}} type="text" name="nombre" id="nombre" autoComplete="given-name" defaultValue={data.nombre} className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="responsable" className=" text-sm font-semibold leading-6 text-gray-900">Introduce Responsable</label>
                    <input onChange={(e)=>{setResponsable(e.target.value)}} type="text" name="responsable" id="responsable" autoComplete="given-name" defaultValue={data.responsable} className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Enviar</button>
            </form>
        </div>
    </div>
  )
}


// onChange={(e)=>{setNombre(e.target.value)}}

// onChange={(e)=>{setPassword(e.target.value)}}