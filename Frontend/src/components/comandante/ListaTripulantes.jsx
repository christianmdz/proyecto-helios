import React from 'react'
import { getAllCrew } from '../../api/navegantes/navegantes';
import TablaTripulantes from './TablaTripulantes';

export default function ListaTripulantes() {

    const {data} = getAllCrew();
    console.log(data);
  return (
    <div className='flex flex-col justify-center items-center mt-2'>
        {data?.map((tripulante) => (
            <TablaTripulantes key={tripulante.id} tripulante={tripulante} />
        ))}
    </div>
  )
}
