import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Comandante from '../pages/Comandante';
import RegistroForm from './RegistroForm';
import InfoTripulacionComandante from './Comandante/InfoTripulacionComandante';
import TripulanteDetalle from './Comandante/TripulanteDetalle';
import InfoTareasComandante from './Comandante/InfoTareasComandante';
import InfoTareaDetalle from './Comandante/InfoTareaDetalle';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path='comandante' element={<Comandante />}>
        <Route path='tripulacion' element={<InfoTripulacionComandante />} />
        <Route path='tripulacion/:id' element={<TripulanteDetalle />} />
        <Route path='tareas/' element={<InfoTareasComandante />} />
        <Route path='tareas/:id' element={<InfoTareaDetalle />} />

      </Route>
      <Route path='registro' element={<RegistroForm />} />
    </Routes>
  );
}




//   export default function Routing (){
//    return (
//        <Routes>
//            <Route Path /login element={<Login>} />
//            <Route
//                element={
//                    <ProtectedRoute>
//                        <MainPage>
//                }
//    )        >
//                Route index element=Home
//                Route path element
//                Route path element
//                Route path element
//                Route path element
//                Route path element
//                Route path element
//             <Route/>
//             <Route path * element not found
//   }
