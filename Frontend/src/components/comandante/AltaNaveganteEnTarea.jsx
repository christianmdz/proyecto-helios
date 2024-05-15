import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCrewInTask } from '../../api/naventarea/naventarea';

export default function AltaNaveganteEnTarea({idTask}) {
    const [idNavegante, setIdNavegante] = useState();
    const [idTarea, setIdTarea] = useState(idTask);
    const [fechaIncorporacion, setFechaIncorporacion] = useState();
    const [jornada, setJornada] = useState();
    const [asignacion, setAsignacion] = useState();
    const navigate = useNavigate();

    const opcionesJornada = [
        {value: "parcial" , label: "Parcial"},
        {value: "completa", label: "Completa"}
    ];

    const opcionesAsignacion = [
        {value: "temporal" , label: "Temporal"},
        {value: "indefinida", label: "indefinida"}
    ];

    const handleJornadaChange = (e) => {
        setJornada(e.target.value);
    }

    const handleAsignacionChange = (e) => {
        setAsignacion(e.target.value);
    }

    const handleCrear = (e) => {
        e.preventDefault();
        const data = {idNavegante: idNavegante, idTarea: idTarea, fechaIncorporacion: fechaIncorporacion, jornada: jornada, asignacion: asignacion};
        createCrewInTask(data);
        navigate(`/comandante/tareasComandante`);   
    }



  return (
    <div className='flex flex-col justify-center items-center mt-2'>
            <div className="flex flex-col  md:max-w-xl m-4 " >
                <form onSubmit={handleCrear}>
                    <div className="mb-3">
                        <label htmlFor="idNavegante" className=" text-sm font-semibold leading-6 text-gray-900">Id del navegante</label>
                        <input onChange={(e)=>{setIdNavegante(e.target.value)}} type="number" name="idNavegante" id="idNavegante" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fechaIncorporacion" className="text-sm font-semibold leading-6 text-gray-900">Fecha de Incorporacion</label>
                        <input type="date"  onChange={(e) => setFechaIncorporacion(e.target.value)} className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                    <div className="mb-3">
                        <label htmlFor="jornada" className="text-sm font-semibold leading-6 text-gray-900">Seleccion la jornada</label>
                        <select onChange={handleJornadaChange} value={jornada} className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option value="" >Selecciona una jornada</option>
                            {opcionesJornada.map(opcion => (
                                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="asignacion" className="text-sm font-semibold leading-6 text-gray-900">Selecciona una asignación</label>
                        <select onChange={handleAsignacionChange} value={asignacion} className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option value="" >Selecciona una asignacion</option>
                            {opcionesAsignacion.map(opcion => (
                                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
                </form>
            </div>
        </div>
  )
}
