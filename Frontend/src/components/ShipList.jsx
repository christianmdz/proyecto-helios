import React from 'react'
import { useFetch } from '../hooks/useFetch'
import ShipCard from './ShipCard'
import '../style/card.css';

export function ShipList() {
    const { data, loading } = useFetch('http://localhost:8085/nave/uno/1');

  return (
    <div className='bodycards'>
            {loading && <p>Loading...</p>}
            {data && 
                <ShipCard key={data.id} data={data}/>
}
        </div>
  )
}

