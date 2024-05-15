import { createCrewInProject } from '../../api/navenproy/navenproy';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AltaNaveganteEnProyecto({projectId}) {

    const [idNavegante, setIdNavegante] = useState();
    const [idProyecto, setIdProyecto] = useState(projectId);
    const [fechaIncorporacion, setFechaIncorporacion] = useState();
    const [diasAsignados, setDiasAsignados] = useState();
    const navigate = useNavigate();

    const handleAltaNavegante = (e) => {
        e.preventDefault();
        const data = {idNavegante: idNavegante, idProyecto: idProyecto, fechaIncorporacion: fechaIncorporacion, diasAsignados: diasAsignados};
        createCrewInProject(data);
        navigate(`/comandante/proyectosComandante`);
    }


  return (
    <div className='flex flex-col justify-center items-center mt-2'>
            <div className="flex flex-col  md:max-w-xl m-4 " >
                <form onSubmit={handleAltaNavegante}>
                    <div className="mb-3">
                        <label htmlFor="idNavegante" className=" text-sm font-semibold leading-6 text-gray-900">Id del navegante</label>
                        <input onChange={(e)=>{setIdNavegante(e.target.value)}} type="number" name="idNavegante" id="idNavegante" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fechaIncorporacion" className="text-sm font-semibold leading-6 text-gray-900">Fecha de Incorporacion</label>
                        <input type="date"  onChange={(e) => setFechaIncorporacion(e.target.value)} className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="diasAsignados" className=" text-sm font-semibold leading-6 text-gray-900">Número de días asignados</label>
                        <input onChange={(e)=>{setDiasAsignados(e.target.value)}} type="number" name="diasAsignados" id="diasAsignados" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    
                    <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
                </form>
            </div>
        </div>
  )
}
