import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NaveLista from './publica/NaveLista';

import HomeP from './publica/HomeP';
import MisionLista from './publica/MisionLista';
import TripulantesTabla from './publica/TripulantesTabla';
import FormularioLogin from './publica/FormularioLogin';
import Cabecera from './publica/Cabecera';
import CabeceraComandante from './comandante/CabeceraComandante';
import HomeComandante from './comandante/HomeComandante';
import TablaProyectos from './comandante/TablaProyectos';
import { TablaTareas } from './comandante/TablaTareas';
import ConstructorTarea from './comandante/ConstructorTarea';
import ConstructorModificarTarea from './comandante/ConstructorModificarTarea';
import CrearTarea from './comandante/CrearTarea';
import TablaTripulantes from './comandante/TablaTripulantes';
import Registro from './publica/Registro';
import ConstructorProyectoDetalle from './comandante/ConstructorProyectoDetalle';
import ConstructorModificarProyecto from './comandante/ConstructorModificarProyecto';
import CrearProyecto from './comandante/CrearProyecto';
import ConstructorTripulanteDetalle from './comandante/ConstructorTripulanteDetalle';


export default function Routing() {

 

  return (
    <Routes>
      <Route path="/" element={<Cabecera />}>
        <Route index element={<HomeP />} />
        <Route path="nave" element={<NaveLista />} />
        <Route path="mision" element={<MisionLista />} />
        <Route path="tripulantes" element={<TripulantesTabla />} />
        <Route path="login" element={<FormularioLogin />} />
        <Route path="registro" element={<Registro />} />
      </Route>
      <Route path="comandante" element={<CabeceraComandante />}>
        <Route index element={<HomeComandante />} />
        <Route path="proyectosComandante" element={<TablaProyectos />} />
        <Route path="proyectosComandante/:id" element={<ConstructorProyectoDetalle />} />
        <Route path="modificarProyectoComandante/:id" element={<ConstructorModificarProyecto />} />
        <Route path="crearProyectoComandante" element={<CrearProyecto />} />
        <Route path="tripulantesComandante" element={<TablaTripulantes />} />
        <Route path="tripulantesComandante/:id" element={<ConstructorTripulanteDetalle />} />
        <Route path="tareasComandante" element={<TablaTareas />} />
        <Route path="tareasComandante/:id" element={<ConstructorTarea />} />
        <Route path="modificarTareaComandante/:id" element={<ConstructorModificarTarea />} />
        <Route path="crearTareaComandante" element={<CrearTarea />} />
      </Route>
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
