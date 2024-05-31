import React from "react";
import { Box, Typography } from "@mui/material";
import RegistroForm from "../components/RegistroForm";
import LoginNav from "../components/LoginNav";

export default function RegisterPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "3vh",
      }}
    >
      <LoginNav />
      <Box
        sx={{
          marginTop: "9vh",
        }}
      >
        <RegistroForm />
      </Box>
    </Box>
  );
}
