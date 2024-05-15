import React, { useState } from "react";
import { getOneTask } from "../../api/tareas/tareas";
import { useParams } from "react-router-dom";
import DetalleTarea from "./DetalleTarea";
import ConstructorTripulantesEnTarea from "./ConstructorTripulantesEnTarea";
import AltaNaveganteEnTarea from "./AltaNaveganteEnTarea";

export default function ConstructorTarea() {
    const {id} = useParams();
    const  {data} = getOneTask(id);
    const [showTripulantes, setShowTripulantes] = useState(false);
    const [showAsignarTripulante, setShowAsignarTripulante] = useState(false);

    const handleVolver = () => {
        window.location.href = `/comandante/tareasComandante`;   
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
            {data &&  <DetalleTarea key={data.id} data={data}  onVerTripulantes={handleVerTripulantes} onAsignarTripulantes={handleAsignarTripulante} />}
            {showTripulantes && <ConstructorTripulantesEnTarea taskId={id} />}
            {showAsignarTripulante && <AltaNaveganteEnTarea idTask={id} />}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleVolver} >Volver</button>
        </div>
    
        
    )
}