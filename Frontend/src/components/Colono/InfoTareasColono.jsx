import React from "react";
import { Box, Typography } from "@mui/material";
import { getAllTasks } from "../../api/tareas/tareas";
import TarjetaTareaColono from "./TarjetaTareaColono";

export default function InfoTareasColono() {
  const { data } = getAllTasks();

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
          Información de las tareas
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
          Mantener la nave a punto, es el éxito de la misión
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
        {data?.map((task) => (
          <TarjetaTareaColono key={task.id} task={task} />
        ))}
      </Box>
    </>
  );
}
