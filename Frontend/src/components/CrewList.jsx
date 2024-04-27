import React from 'react'
import { useFetch } from '../hooks/useFetch';
import CrewCard from './CrewCard';
import '../style/card.css';

export default function CrewList() {
    const { data, loading } = useFetch('http://localhost:8085/nave/info-tripulacion');


    return (
        <div className='bodycards'>
            {loading && <p>Loading...</p>}
            {data?.map((tripulante) => (<CrewCard key={tripulante.id} tripulante={tripulante}/>))}
        </div>
    )
}
