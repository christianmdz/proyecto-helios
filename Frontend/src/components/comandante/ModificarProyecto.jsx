import React from 'react'
import { useState } from 'react';
import { updateProject } from '../../api/proyectos/proyectos';


export default function ModificarProyecto({data}) {

    const [id, setId] = useState(data.id);
    const [idDirector, setIdDirector] = useState();
    const [nombre, setNombre] = useState(data.nombre);
    const [campo, setCampo] = useState(data.campo);
    const [descripcion, setDescripcion] = useState(data.descripcion);
    const [fechaInicio, setFechaInicio] = useState(data.fechaInicio);
    const [fechaFin, setFechaFin] = useState(data.fechaFin);
    const [etapa, setEtapa] = useState(data.etapa)

    const opcionesDirector = [
        {value: 2, label: "Benito"},
        {value: 3, label: "Tania"},
        {value: 4, label: "Tino"}
    ];

    const opcionesCampo = [
        {value: "INGENIERIA", label: "INGENIERIA"},
        {value: "CIENCIA", label: "CIENCIA"},
        {value: "NAVEGACION", label: "NAVEGACION"}
    ];

    const opcionesEtapa = [ 
        {value: "proyectado", label: "PROYECTADO"},
        {value: "activo", label: "ACTIVO"},
        {value: "pausado", label: "PAUSADO"},
        {value: "cancelado", label: "CANCELADO"},
        {value: "terminado", label: "TERMINADO"}
    ];

    const handleDirectorChange = (e) => {
        setIdDirector(e.target.value);
    }

    const handleCampoChange = (e) => {
        setCampo(e.target.value);
    }

    const handleEtapaChange = (e) => {
        setEtapa(e.target.value);
    }

    const handleModificar = (e) => {
        e.preventDefault();
        
        const updateData = {id:id, idDirector: idDirector, nombre: nombre, campo: campo, descripcion: descripcion, fechaInicio: fechaInicio, fechaFin: fechaFin, etapa: etapa}
        console.log(updateData);
        updateProject(updateData);
        window.location.href = `/comandante/proyectosComandante`;   
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
                        <label htmlFor="director" className="text-sm font-semibold leading-6 text-gray-900">Selecciona el director</label>
                        <select onChange={handleDirectorChange} value={idDirector} className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option value="">Selecciona un director</option>
                            {opcionesDirector.map(opcion => (
                                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                            ))}
                        </select>
                </div>
                <div className="mb-3">
                        <label htmlFor="campo" className="text-sm font-semibold leading-6 text-gray-900">Selecciona el campo</label>
                        <select onChange={handleCampoChange} value={campo} className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option value="" disabled>Selecciona un campo</option>
                            {opcionesCampo.map(opcion => (
                                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                            ))}
                        </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className=" text-sm font-semibold leading-6 text-gray-900">Introduce descripción</label>
                    <input onChange={(e)=>{setDescripcion(e.target.value)}} type="textarea" rows="3" name="descripcion" id="descripcion" autoComplete="given-name" defaultValue={data.descripcion} className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                <div className="mb-3">
                        <label htmlFor="fechaFin" className="text-sm font-semibold leading-6 text-gray-900">Fecha de fin</label>
                        <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                <div className="mb-3">
                        <label htmlFor="etapa" className="text-sm font-semibold leading-6 text-gray-900">Selecciona una etapa para el proyecto</label>
                        <select onChange={handleEtapaChange} value={etapa} className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option value="" disabled>Selecciona una etapa</option>
                            {opcionesEtapa.map(opcion => (
                                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                            ))}
                        </select>
                </div>
                <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                    Enviar
                </button>
            </form>
        </div>
    </div>      
  ) 
}   
