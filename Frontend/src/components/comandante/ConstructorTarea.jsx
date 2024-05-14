import React from "react";
import { getOneTask } from "../../api/tareas/tareas";
import { useParams } from "react-router-dom";
import DetalleTarea from "./DetalleTarea";

export default function ConstructorTarea() {
    let id = useParams();
    const  {data} = getOneTask(id.id);

    const handleVolver = () => {
        window.location.href = `/comandante/tareasComandante`;   
    }

    return (
        <div className='flex flex-col justify-center items-center mt-2'>
            {data &&  <DetalleTarea key={data.id} data={data}/>}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleVolver} >Volver</button>
        </div>
    
        
    )
}