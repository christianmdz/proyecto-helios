import React from "react";
import { Box, Typography } from "@mui/material";
import { getAllProjects } from "../../api/proyectos/proyectos";
import TarjetaProyectoColono from "./TarjetaProyectoColono";

export default function InfoProyectosColono() {
  const { data } = getAllProjects();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginTop: "14vh",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Orbitron",
            marginBottom: "1rem",
            color: "white",
            textShadow: "0 0 15px rgba(255,255,255,0.7)",
            maxWidth: "85vw",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Información de los proyectos
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Orbitron",
            marginBottom: "1rem",
            color: "white",
            maxWidth: "85vw",
          }}
        >
          La investigación es la clave para el éxito de la misión
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: { lg: "5vw" },
        }}
      >
        {data?.map((project) => (
          <TarjetaProyectoColono key={project.id} project={project} />
        ))}
      </Box>
    </>
  );
}
