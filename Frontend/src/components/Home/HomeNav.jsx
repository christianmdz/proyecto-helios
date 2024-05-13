import { AppBar, CssBaseline, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function HomeNav() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: 'hsla(210, 14%, 7%, 0.7)' }}>
        <Toolbar>
          <p>HELIOS</p>
        </Toolbar>
      </AppBar>
    </div>
  )
}