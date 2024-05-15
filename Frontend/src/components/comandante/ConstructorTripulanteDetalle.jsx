import React from 'react'
import { useParams } from 'react-router-dom'
import { getOneCrew } from '../../api/navegantes/navegantes'
import DetalleTripulante from './DetalleTripulante'
import ConstructorProyectosDeTripulante from './ConstructorProyectosDeTripulante';
import { useState } from 'react';

export default function ConstructorTripulanteDetalle() {

    const {id} = useParams();
    const { data } = getOneCrew(id);
    const [showProjects, setShowProjects] = useState(false); 

    const handleVolver = () => {
        window.location.href = `/comandante/tripulantesComandante`;
    }

    const handleVerProyectos = () => {
        setShowProjects(true);
    }

  return (
    <div className='flex flex-col justify-center items-center mt-2'>
            {data &&  <DetalleTripulante key={data.id} data={data} onVerProyectos={handleVerProyectos}/>}
            {showProjects && <ConstructorProyectosDeTripulante idNavegante={id} />}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleVolver} >Volver</button>
        </div>
  )
}
