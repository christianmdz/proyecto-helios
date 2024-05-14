import React from 'react'

import { Routes, Route } from 'react-router-dom'

import NaveLista from '../components/publica/NaveLista.jsx';
import Cabecera from '../components/publica/Cabecera.jsx';
import HomeP from '../components/publica/HomeP.jsx';
import TripulantesTabla from '../components/publica/TripulantesTabla.jsx';
import MisionLista from '../components/publica/MisionLista.jsx';
import FormularioLogin from '../components/publica/FormularioLogin.jsx';


export default function PaginaPublica() {
  return (
    <>
      <Cabecera/>
        <Routes>
        <Route path='*' element={<HomeP/>}></Route>
        <Route path="/nave" element={<NaveLista/>}></Route>
        <Route path="/mision" element={<MisionLista/>}></Route>
        <Route path="/tripulantes" element={<TripulantesTabla/>}></Route>
        <Route path="/login" element={<FormularioLogin/>}></Route>     
        </Routes>
    </>
     )
    }
       