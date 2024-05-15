import React from 'react'
import { useParams } from 'react-router-dom'
import { getOneProject } from '../../api/proyectos/proyectos'
import DetalleProyecto from './DetalleProyecto'
import ConstructorTripulanteEnProyecto from './ConstructorTripulanteEnProyecto';
import { useState } from 'react';
import AltaNaveganteEnProyecto from './AltaNaveganteEnProyecto';

export default function ConstructorProyectoDetalle() {
    const {id} = useParams();
    const  {data} = getOneProject(id);
    const [showTripulantes, setShowTripulantes] = useState(false);
    const [showAsignarTripulante, setShowAsignarTripulante] = useState(false);
    

    const handleVolver = () => {
        window.location.href = `/comandante/proyectosComandante`;   
    }

    const handleVerTripulantes = () => {
        setShowTripulantes(true);
        setShowAsignarTripulante(false);
    }

    const handleAsignarTripulante = () => {
        setShowAsignarTripulante(true);
        setShowTripulantes(false);
    }


  return (
    <div className='flex flex-col justify-center items-center mt-2'>
            {data &&  <DetalleProyecto key={data.id} data={data} onVerTripulantes={handleVerTripulantes} onAsignarTripulante={handleAsignarTripulante}/>}
            {showTripulantes && <ConstructorTripulanteEnProyecto projectId={id} />}
            {showAsignarTripulante && <AltaNaveganteEnProyecto projectId={id} />}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleVolver} >Volver</button>
        </div>
  )
}
