import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Comandante from "../pages/Comandante";
import InfoTripulacionComandante from "./Comandante/InfoTripulacionComandante";
import TripulanteDetalle from "./Comandante/TripulanteDetalle";
import InfoTareasComandante from "./Comandante/InfoTareasComandante";
import InfoTareaDetalle from "./Comandante/InfoTareaDetalle";
import CrearTarea from "./Comandante/CrearTarea";
import InfoModificarTarea from "./Comandante/InfoModificarTarea";
import InfoProyectosComandante from "./Comandante/InfoProyectosComandante";
import InfoProyectoDetalle from "./Comandante/InfoProyectoDetalle";
import CrearProyecto from "./Comandante/CrearProyecto";
import InfoModificarProyecto from "./Comandante/InfoModificarProyecto";
import ComandanteHome from "./Comandante/ComandanteHome";
import NotFound from "./NotFound";
import Registro from "../pages/Registro";
import Colono from "../pages/Colono";
import HomeColono from "./Colono/HomeColono";
import InfoTripulacionColono from "./Colono/InfoTripulacionColono";
import InfoTareasColono from "./Colono/InfoTareasColono";
import InfoProyectosColono from "./Colono/InfoProyectosColono";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="registro" element={<Registro />} />
      <Route path="colono" element={<Colono />}>
        <Route index element={<HomeColono />} />
        <Route path="tripulacionColono" element={<InfoTripulacionColono />} />
        <Route path="tareasColono" element={<InfoTareasColono />} />
        <Route path="proyectosColono" element={<InfoProyectosColono />} />
      </Route>
      <Route path="comandante" element={<Comandante />}>
        <Route index element={<ComandanteHome />} />
        <Route path="tripulacion" element={<InfoTripulacionComandante />} />
        <Route path="tripulacion/:id" element={<TripulanteDetalle />} />
        <Route path="tareas/" element={<InfoTareasComandante />} />
        <Route path="tareas/:id" element={<InfoTareaDetalle />} />
        <Route path="crear-tarea" element={<CrearTarea />} />
        <Route path="modificar-tarea/:id" element={<InfoModificarTarea />} />
        <Route path="proyectos" element={<InfoProyectosComandante />} />
        <Route path="proyectos/:id" element={<InfoProyectoDetalle />} />
        <Route path="crear-proyecto" element={<CrearProyecto />} />
        <Route
          path="modificar-proyecto/:id"
          element={<InfoModificarProyecto />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
