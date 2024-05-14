import React from 'react'
import  {getNaves}  from '../../api/nave/nave';
import NaveTarjeta from './NaveTarjeta';

export default function NaveLista() {
    const {data} = getNaves();
  return (
    <div className='flex flex-col justify-center items-center mt-2'>
        {data && 
            <NaveTarjeta key={data.id} data={data}/>
          }
    </div>
  )
}
