import React, {useRef} from 'react';
// import { Link } from 'react-router-dom';
import HomeNav from '../components/Home/HomeNav.jsx';
import HomeBody from '../components/Home/HomeBody.jsx';

export default function Home() {

  const circeRef = useRef(null);
  const ceresRef = useRef(null);
  const crewRef = useRef(null);
  const scrollToCirce = () => circeRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToCeres = () => ceresRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToCrew = () => crewRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      <HomeNav
        scrollToCirce={scrollToCirce}
        scrollToCeres={scrollToCeres}
        scrollToCrew={scrollToCrew}
      />
      <HomeBody
        circeRef={circeRef} 
        ceresRef={ceresRef}
        crewRef={crewRef}  
      />
    </div>
  );
}