import React from 'react'
import { getMisiones } from '../../api/nave/nave';
import MisionTarjeta from './MisionTarjeta';

export default function MisionLista() {

    const {data} = getMisiones();

  return (
    <div className='flex flex-col justify-center items-center mt-2'>
        {data && <MisionTarjeta key={data.id} data={data} />}
    </div>
  )
}
