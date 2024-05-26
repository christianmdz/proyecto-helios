import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { giveMeRol } from "../../api/auth/auth";
import colono from "../../assets/fondo_colono.jpg";

export default function HomeColono() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const rol = giveMeRol();
  const formatoRol = (rol) => {
    return rol.substring(5);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0f1214",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={colono}
        alt="Colono"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          color: "white",
          textAlign: "center",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            fontFamily: "Orbitron",
            textShadow: "0 0 15px rgba(255,255,255,0.7)",
          }}
        >
          Bienvenido
        </Typography>
        <Typography
          variant={isMobile ? "h3" : "h2"}
          sx={{
            fontFamily: "Dune",
            textShadow: "0 0 25px rgba(255,255,255,0.7)",
            fontSize: { xs: "1.4rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
          }}
        >
          {formatoRol(rol)}
        </Typography>
      </Box>
    </Box>
  );
}
