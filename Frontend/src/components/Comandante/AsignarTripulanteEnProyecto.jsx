import React from 'react'
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box, Select, MenuItem } from '@mui/material';
import TextField from "@mui/material/TextField";
import { Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { createCrewInProject } from '../../api/navenproy/navenproy';

export default function AsignarTripulanteEnProyecto({ id }) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = handleSubmit((data) => {
    const dataAsignar = { ...data, idProyecto: id };
    console.log(dataAsignar);
    createCrewInProject(dataAsignar);
    navigate(0, {replace:true});
  });

  const tripulantes = [
    { value: 2, label: "Benito" },
    { value: 3, label: "Tania" },
    { value: 4, label: "Tino" },
    { value: 5, label: "Protestato" },
    { value: 6, label: "Juan" },
    { value: 7, label: "María" },
    { value: 8, label: "Ana" },
    { value: 9, label: "José" },
    { value: 10, label: "Laura" },
    { value: 11, label: "Javier" },
    { value: 12, label: "Manuel" },
    { value: 13, label: "Ana" },
    { value: 14, label: "Juan" },
    { value: 15, label: "María" }
  ]

  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color: 'white', textShadow: '0 0 15px rgba(255,255,255,0.7)', textAlign: 'center', fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
          Asigna un Tripulante a este proyecto
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '3vh' }}>
        <form onSubmit={onSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2vh',
              border: '2px solid white',
              borderRadius: '8px',
              padding: '3vh',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',

            }}
          >
            <Grid
              container spacing={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Grid item xs={12} >
                <Select
                  className='custom-text-field'
                  variant="outlined"
                  required
                  id="idNavegante"
                  name="idNavegante"
                  defaultValue={2}
                  {...register("idNavegante", {
                    required: {
                      value: true,
                      message: "Selecciona un tripulante"
                    }
                  })}
                  MenuProps={{ PaperProps: { style: { maxHeight: '20vh' } } }}
                  sx={{ overflowY: 'auto' }}
                >
                  {tripulantes.map((tripulante) => (
                    <MenuItem key={tripulante.value} value={tripulante.value}>
                      {tripulante.label + " - ID: " + tripulante.value}
                    </MenuItem>
                  ))}
                </Select>
                {errors.idNavegante && (
                  <Typography sx={{ color: 'red', fontSize: '0.7rem' }}>
                    {errors.idNavegante.message}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className='custom-text-field'
                  variant="outlined"
                  required
                  id="fechaIncorporacion"
                  label="Fecha de Incorporación"
                  name="fechaIncorporacion"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...register("fechaIncorporacion", {
                    required: {
                      value: true,
                      message: "Debes seleccionar una fecha válida"
                    }
                  })}
                />
                {errors.fechaIncorporacion && <Typography sx={{ color: 'red', fontSize: '0.7rem' }}>
                  {errors.fechaIncorporacion.message}
                </Typography>}
              </Grid>
              <Grid item xs={12} >
                <TextField
                  className='custom-text-field'
                  variant="outlined"
                  required
                  id="diasAsignados"
                  label="Días Asignados"
                  name="diasAsignados"

                  {...register("diasAsignados", {
                    required: {
                      value: true,
                      message: "Debes introducir un número de días asignados"
                    },
                    valueAsNumber: {
                      value: 1,
                      message: "Debes asignar al menos 1 día"
                    }
                  })}
                />
                {errors.diasAsignados && <Typography sx={{ color: 'red', fontSize: '0.7rem' }}>
                  {errors.diasAsignados.message}
                </Typography>}
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#50a4c2',
                color: 'white',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: 'darkviolet',
                  boxShadow: '0px 4px 8px rgba(138, 43, 226, 0.5)',
                },
              }}
            >
              Asignar
            </Button>
          </Box>
        </form>
      </Box>
    </>
  )
}
