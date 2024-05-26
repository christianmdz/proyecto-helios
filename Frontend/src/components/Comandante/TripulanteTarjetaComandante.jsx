import React from "react";
import { Box, Grid, Typography, Card, CardActionArea } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

export default function TripulanteTarjetaComandante({ tripulante }) {
  const path = "/src/assets/";

  const viewDetail = () => {
    window.location.href = `/comandante/tripulacion/${tripulante.id}`;
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const gradientDirection = isSmallScreen ? "to bottom" : "to right";
  const gradientColor =
    tripulante.campo === "LIDER"
      ? "#DBA44E"
      : tripulante.campo === "CIENCIA"
      ? "#74A44E"
      : tripulante.campo === "INGENIERIA"
      ? "#50a4c2"
      : tripulante.campo === "NAVEGACION"
      ? "#A83739"
      : "#c25095";

  const formatoRol = (rol) => {
    return rol.substring(5);
  };

  return (
    <Card
      sx={{
        display: "flex",
        paddingLeft: {
          xs: "2vw",
          sm: "2vw",
          md: "4vw",
          lg: "15vw",
          xl: "15vw",
        },
        paddingBottom: { xs: "5vh", md: "3vh" },
        backgroundColor: "transparent",
      }}
    >
      <CardActionArea
        onClick={viewDetail}
        sx={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease", // Transición para el hover
          "&:hover": {
            transform: "scale(0.98)", // Reducción del tamaño en hover
            boxShadow: `0 0 10px 2px ${gradientColor}`, // Sombra blanca en hover
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "flex-start",
            alignItems: "center",
            gap: { xs: "2vh", md: "6vw", lg: "auto" },
            backgroundImage: `linear-gradient(${gradientDirection}, ${gradientColor}, transparent)`,
            minWidth: { xs: "90vw", sm: "65vw", md: "50vw" },
            maxWidth: { xs: "95vw", lg: "60vw" },
          }}
        >
          <Grid
            item
            sx={{
              width: { xs: "100%", md: "auto" },
              maxWidth: { xs: "100%", md: "17vw" },
              height: { xs: "auto", md: "100%" },
              padding: { xs: "2vw", md: "0" },
            }}
          >
            <Box
              component="img"
              src={
                tripulante.campo !== "NO_ASIGNADO"
                  ? path + tripulante.id + ".jpg"
                  : path + "default_crew_avatar.jpg"
              }
              alt="tripulante"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Grid>
          <Box
            sx={{
              paddingLeft: { xs: 0, md: "5vh" },
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "transparent",
                textAlign: { xs: "center", md: "left", lg: "left" },
                minWidth: { md: "20vw" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "JetBrains Mono",
                  color: "white",
                  fontSize: { xs: "1.2rem", md: "1.6rem" },
                }}
              >
                Nombre: {tripulante.nombre}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "JetBrains Mono",
                  color: "white",
                  fontSize: { xs: "1.2rem", md: "1.6rem" },
                }}
              >
                Apellido: {tripulante.apellido}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "JetBrains Mono",
                  color: "white",
                  fontSize: { xs: "1.2rem", md: "1.6rem" },
                }}
              >
                Rol: {formatoRol(tripulante.rol)}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "JetBrains Mono",
                  color: "white",
                  fontSize: { xs: "1.2rem", md: "1.6rem" },
                }}
              >
                Campo: {tripulante.campo}
              </Typography>
            </Grid>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
