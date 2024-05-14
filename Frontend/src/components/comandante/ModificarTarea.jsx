import React from 'react'
import { useState } from 'react';

import {updateTask } from '../../api/tareas/tareas';

export default function ModificarTarea({data}) {

    const [id, setId] = useState(data.id);
    const [nombre, setNombre] = useState(data.nombre);
    const [responsable, setResponsable] = useState(data.responsable);
    const [frecuencia, setFrecuencia] = useState(data.frecuencia);
    const [campo, setCampo] = useState(data.campo);
    const [descripcion, setDescripcion] = useState(data.descripcion);

    const opcionesResponsable = [
        {value: "plopera", label: "Benito"},
        {value: "tbieszka", label: "Tania"},
        {value: "tormaechea", label: "Tino"}
    ];

    const opcionesCampo = [ 
        {value: "INGENIERIA", label: "INGENIERIA"},
        {value: "CIENCIA", label: "CIENCIA"},
        {value: "NAVEGACION", label: "NAVEGACION"}
    ];

    const opcionesFrecuencia = [
        {value: "diaria", label: "DIARIA"},
        {value: "semanal", label: "SEMANAL"},
        {value: "mensual", label: "MENSUAL"},
        {value: "trimestral", label: "TRIMESTRAL"}
    ];

    const handleResponsableChange = (e) => {
        setResponsable(e.target.value);
    }

    const handleCampoChange = (e) => {
        setCampo(e.target.value);
    }

    const handleFrecuenciaChange = (e) => {
        setFrecuencia(e.target.value);
    }

    const handleModificar = (e) => {
        e.preventDefault();
        
        const updateData = {id:id, nombre: nombre, responsable:responsable, frecuencia: frecuencia, campo: campo, descripcion: descripcion}
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
                        <label htmlFor="responsable" className="text-sm font-semibold leading-6 text-gray-900">Seleccion el responsable</label>
                        <select onChange={handleResponsableChange} value={responsable} className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option value="">Selecciona un Responsable</option>
                            {opcionesResponsable.map(opcion => (
                                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                            ))}
                        </select>
                    </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className=" text-sm font-semibold leading-6 text-gray-900">Introduce descripción</label>
                    <input onChange={(e)=>{setDescripcion(e.target.value)}} type="textarea" rows="3" name="descripcion" id="descripcion" autoComplete="given-name" defaultValue={data.descripcion} className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                <div className="mb-3">
                        <label htmlFor="campo" className="text-sm font-semibold leading-6 text-gray-900">Seleccion el campo</label>
                        <select onChange={handleCampoChange} value={campo} className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option value="" >Selecciona un campo</option>
                            {opcionesCampo.map(opcion => (
                                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                            ))}
                        </select>
                </div>
                <div className="mb-3">
                        <label htmlFor="frecuencia" className="text-sm font-semibold leading-6 text-gray-900">Seleccion el campo</label>
                        <select onChange={handleFrecuenciaChange} value={frecuencia} className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option value="" disabled>Selecciona un campo</option>
                            {opcionesFrecuencia.map(opcion => (
                                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                            ))}
                        </select>
                </div>
                <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Enviar</button>
            </form>
        </div>
    </div>
  )
}


// onChange={(e)=>{setNombre(e.target.value)}}

// onChange={(e)=>{setPassword(e.target.value)}}