import React from 'react';
import { useFetch } from '../use/useFetch';
import ProjectCard from './ProjectCard';

function ProjectsList() {

  const { data, loading } = useFetch('http://localhost:8085/nave/info-tripulacion');
  
  // if (data.length === 0) {
  //   return <div>No hay Proyectos</div>
  // }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {data?.map((nave) => (
        <ProjectCard  key={nave.id} nave={nave}/>   
      ))}
    </div>
  )
}

export default ProjectsList