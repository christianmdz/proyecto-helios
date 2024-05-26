import React from "react";
import { Box, Typography } from "@mui/material";
import { getAllCrew } from "../../api/navegantes/navegantes";

export default function InfoTripulacionColono() {
  const { data } = getAllCrew();

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
          Nuestra tripulación
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Orbitron",
            marginBottom: "1rem",
            color: "white",
            textShadow: "0 0 15px rgba(255,255,255,0.7)",
            maxWidth: "85vw",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Forjando el destino de la humanidad
        </Typography>
      </Box>
      {data?.map((tripulante) => (
        <TarjetaTripulanteColono key={tripulante.id} tripulante={tripulante} />
      ))}
    </>
  );
}
