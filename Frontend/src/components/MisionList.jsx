import React from 'react'
import { useFetch } from '../hooks/useFetch'
import MisionCard from './MisionCard';
import '../style/card.css';

export default function MisionList() {

    const { data, loading } = useFetch('http://localhost:8085/nave/mision/1');

  return (
    <div className='bodycards'>
        {loading && <p>Loading...</p>}
        {data && 
            <MisionCard key={data.id} data={data}/>
        }
    </div>
  )
}
