import React from "react"
import circe from '../../assets/circe_test.jpeg'
import { Box } from "@mui/material"

export default function HomeBody() {
  return (
    <Box sx={{
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      width: '100vw',
      height: '100vh',
    }}>
      <img src={circe} alt="Circe Spaceship"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  )
}