import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import ComandanteNav from "../components/Comandante/ComandanteNav";
import "../styles/comandante.css";

export default function Comandante() {
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
        <ComandanteNav />
        <Outlet />
      </Box>
    </div>
  );
}
