import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { registerUser } from "../api/auth/auth";
import { useForm } from "react-hook-form";
import "../styles/login.css";
import { Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

export default function RegistroForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    const dataRegistro = { ...data, email: data.username + "@helios.xr" };
    registerUser(dataRegistro);
    navigate("/");
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h3"}
          sx={{
            fontFamily: "Orbitron",
            marginBottom: "1rem",
            color: "white",
            textShadow: "0 0 15px rgba(255,255,255,0.7)",
          }}
        >
          Únete a la misión
        </Typography>
      </Box>
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2vh",
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12}>
              <TextField
                className="custom-text-field"
                variant="outlined"
                required
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Debes introducir un nombre de usuario",
                  },
                  minLength: {
                    value: 3,
                    message: "El nombre debe ser mayor a dos caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "El nombre debe ser menor a 20 caracteres",
                  },
                })}
              />
              {errors.username && (
                <Typography sx={{ color: "red", fontSize: "0.7rem" }}>
                  {errors.username.message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="custom-text-field"
                variant="outlined"
                required
                id="password"
                label="Contraseña"
                name="password"
                autoComplete="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Debes introducir una contraseña",
                  },
                  minLength: {
                    value: 5,
                    message: "La contraseña debe ser mayor a cuatro caracteres",
                  },
                  maxLength: {
                    value: 40,
                    message: "La contraseña debe ser menor a 40 caracteres",
                  },
                })}
              />
              {errors.password && (
                <Typography sx={{ color: "red", fontSize: "0.7rem" }}>
                  {errors.password.message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="custom-text-field"
                variant="outlined"
                required
                id="nombre"
                label="Nombre"
                name="nombre"
                autoComplete="nombre"
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "Debes introducir un nombre",
                  },
                  minLength: {
                    value: 1,
                    message: "El nombre debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 15,
                    message: "El nombre no puede superar los 15 caractares",
                  },
                })}
              />
              {errors.nombre && (
                <Typography sx={{ color: "red", fontSize: "0.7rem" }}>
                  {errors.nombre.message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="custom-text-field"
                variant="outlined"
                required
                id="apellido"
                label="Apellido"
                name="apellido"
                autoComplete="apellido"
                {...register("apellido", {
                  required: {
                    value: true,
                    message: "Debes introducir un apellido",
                  },
                  minLength: {
                    value: 1,
                    message: "El apellido debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 15,
                    message: "El apellido no puede superar los 15 caractares",
                  },
                })}
              />
              {errors.apellido && (
                <Typography sx={{ color: "red", fontSize: "0.7rem" }}>
                  {errors.apellido.message}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#DBA44E",
              color: "white",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "darkviolet",
                boxShadow: "0px 4px 8px rgba(138, 43, 226, 0.5)",
              },
            }}
          >
            Launch
          </Button>
        </Box>
      </form>
    </>
  );
}
