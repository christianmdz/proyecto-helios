import { Grid, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {

  const path = "/src/assets/"
  const navigate = useNavigate()

  const returnHome = () => {
    // window.location.href = `/comandante/tripulacion/${tripulante.id}`;
    navigate("/")
  }

  return (
    <Grid
      sx={{
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: {xl:'5vh'},
        gap: '4vh'
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ fontFamily: 'Orbitron', color: 'white' }}>Opsss, te has pasado la salida</Typography>
      </Box>
      <Box
        component="img"
        src={path + "not_found.jpg"}
        alt="404 Not Found"
        sx={{
          width: '65vw',
          height: '65vh',
        }}
      />
      <Button
        onClick={returnHome}
        type="button"
        variant="contained"
        sx={{
          backgroundColor: '#DBA44E',
          color: 'white',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: 'darkviolet',
            boxShadow: '0px 4px 8px rgba(138, 43, 226, 0.5)',
          }
        }}
      >
        Volver
      </Button>
    </Grid>
  )
}