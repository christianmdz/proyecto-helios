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
import CrearTarea from './Comandante/CrearTarea';
import InfoModificarTarea from './Comandante/InfoModificarTarea';
import InfoProyectosComandante from './Comandante/InfoProyectosComandante';
import InfoProyectoDetalle from './Comandante/InfoProyectoDetalle';
import CrearProyecto from './Comandante/CrearProyecto';
import InfoModificarProyecto from './Comandante/InfoModificarProyecto';

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
        <Route path='crear-tarea' element={<CrearTarea />} />
        <Route path='modificar-tarea/:id' element={<InfoModificarTarea />} />
        <Route path='proyectos' element={<InfoProyectosComandante />} />
        <Route path='proyectos/:id' element={<InfoProyectoDetalle />} />
        <Route path='crear-proyecto' element={<CrearProyecto />} />
        <Route path='modificar-proyecto/:id' element={<InfoModificarProyecto />} />
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
