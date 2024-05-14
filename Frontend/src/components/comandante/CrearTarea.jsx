import React from 'react'
import { useState } from 'react';
import { createTask } from '../../api/tareas/tareas';
import { useNavigate } from 'react-router-dom';



export default function CrearTarea() {
    const [nombre, setNombre] = useState("");
    const [idResponsable, setIdResponsable] = useState(); // 
    const [campo, setCampo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [frecuencia, setFrecuencia] = useState("");
    const navigate = useNavigate();

    const opcionesResponsable = [
        {value: 2, label: "Benito"},
        {value: 3, label: "Tania"},
        {value: 4, label: "Tino"}
    ];

    const opcionesCampo = [
        {value: "INGENIERIA", label: "INGENIERIA"},
        {value: "CIENCIA", label: "CIENCIA"},
        {value: "NAVEGACION", label: "NAVEGACION"}
    ];    

    const handleResponsableChange = (e) => {
        setIdResponsable(e.target.value);
    }

    const handleCampoChange = (e) => {
        setCampo(e.target.value);
    }

    const handleCrear = (e) => {
        e.preventDefault();
        const data = {nombre: nombre, idResponsable:idResponsable, campo: campo, descripcion: descripcion, frecuencia: frecuencia};
        createTask(data);
        navigate('/comandante/tareasComandante');
        
    }

    return (
        <div className='flex flex-col justify-center items-center mt-2'>
            <div className="flex flex-col  md:max-w-xl m-4 " >
                <form onSubmit={handleCrear}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className=" text-sm font-semibold leading-6 text-gray-900">Nombre de la tarea</label>
                        <input onChange={(e)=>{setNombre(e.target.value)}} type="text" name="nombre" id="nombre" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
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
                        <label htmlFor="responsable" className="text-sm font-semibold leading-6 text-gray-900">Seleccion el responsable</label>
                        <select onChange={handleResponsableChange} value={idResponsable} className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option value="" >Selecciona un Responsable</option>
                            {opcionesResponsable.map(opcion => (
                                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion" className=" text-sm font-semibold leading-6 text-gray-900">Introduce Descripcion</label>
                        <input onChange={(e)=>{setDescripcion(e.target.value)}} type="text-area" name="descripcion" id="descripcion" autoComplete="given-name"  className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="frecuencia" className=" text-sm font-semibold leading-6 text-gray-900">Introduce Frecuencia</label>
                        <input onChange={(e)=>{setFrecuencia(e.target.value)}} type="text" name="frecuencia" id="frecuencia" autoComplete="given-name"  className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
                </form>
            </div>
        </div>
    )
}