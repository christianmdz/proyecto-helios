import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PaginaPublica from '../pages/PaginaPublica';
import NaveLista from './publica/NaveLista';
import Login from '../pages/Login';
import Comandante from '../pages/Comandante';
import HomeP from './publica/HomeP';
import MisionLista from './publica/MisionLista';
import TripulantesTabla from './publica/TripulantesTabla';
import FormularioLogin from './publica/FormularioLogin';
import Cabecera from './publica/Cabecera';
import CabeceraComandante from './comandante/CabeceraComandante';
import HomeComandante from './comandante/HomeComandante';
import TablaProyectos from './comandante/TablaProyectos';
import ModificarTarea from './comandante/ModificarTarea';

import ListaTripulantes from './comandante/ListaTripulantes';
import { TablaTareas } from './comandante/TablaTareas';
import DetalleTarea from './comandante/DetalleTarea';
import ConstructorTarea from './comandante/ConstructorTarea';
import ConstructorModificarTarea from './comandante/ConstructorModificarTarea';


export default function Routing() {

 

  return (
    <Routes>
      <Route path="/" element={<Cabecera />}>
        <Route index element={<HomeP />} />
        <Route path="nave" element={<NaveLista />} />
        <Route path="mision" element={<MisionLista />} />
        <Route path="tripulantes" element={<TripulantesTabla />} />
        <Route path="login" element={<FormularioLogin />} />
      </Route>
      <Route path="comandante" element={<CabeceraComandante />}>
        <Route index element={<HomeComandante />} />
        <Route path="proyectos" element={<TablaProyectos />} />
        <Route path="tripulantesComandante" element={<ListaTripulantes />} />
        <Route path="tareasComandante" element={<TablaTareas />} />
        <Route path="tareasComandante/:id" element={<ConstructorTarea />} />
        <Route path="modificarTareaComandante/:id" element={<ConstructorModificarTarea />} />
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
