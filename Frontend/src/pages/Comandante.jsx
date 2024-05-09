import React from "react";
import { useNavigate } from "react-router-dom";

export default function Comandante() {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // Eliminar el token del localStorage
      localStorage.removeItem("token");
      // Redirigir a la página de inicio
      navigate("/");
    };
  
    return (
      <div>
        <h2>Bienvenido Comandante</h2>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    );
  }