import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavColono from "../components/Colono/NavColono";
import "../styles/comandante.css";

export default function Colono() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <NavColono />
        <Outlet />
      </Box>
    </div>
  );
}
