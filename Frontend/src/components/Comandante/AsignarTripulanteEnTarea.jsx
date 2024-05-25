import React from 'react'
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box,Select } from '@mui/material';
import TextField from "@mui/material/TextField";
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { createCrewInTask } from '../../api/naventarea/naventarea';

export default function AsignarTripulanteEnTarea({id}) {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors} } = useForm();
    
    const opcionesJornada = [
        {value: "parcial" , label: "Parcial"},
        {value: "completa", label: "Completa"}
    ];

    const opcionesAsignacion = [
        {value: "temporal" , label: "Temporal"},
        {value: "indefinida", label: "indefinida"}
    ];

    const onSubmit = handleSubmit( (data) => {
        const dataAsignar = {...data, idTarea: id};
        console.log(dataAsignar);
        createCrewInTask(dataAsignar);
        navigate('/comandante/tareas');
    });
    

  return (
    <>
      <Box>
            <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom: '1rem', color:'white', textShadow: '0 0 15px rgba(255,255,255,0.7)', textAlign: 'center', fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
                Asigna un Tripulante a este proyecto
            </Typography>   
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop:'3vh' }}>
        <form onSubmit={onSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2vh',
              border: '2px solid white', // Borde blanco
              borderRadius: '8px', // Esquinas redondeadas
              padding: '3vh', // Espacio interior
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
              
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
                <TextField
                  className='custom-text-field'
                  variant="outlined"
                  required
                  id="idNavegante"
                  label="Id del Navegante"
                  name="idNavegante"
                  autoComplete="idNavegante"
                  {...register("idNavegante",{
                    required:{
                    value:true,
                    message:"Debes introducir un id para el navegante"
                    }
                    })}
                />
                {errors.idNavegante && <Typography sx={{color:'red', fontSize:'0.7rem'}}>
                  {errors.idNavegante.message}
                </Typography>}
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
              <Grid item xs={12}>
                <Select
                  className='custom-text-field'
                  variant="outlined"
                  required            
                  id="jornada"
                  name="jornada"
                  defaultValue={0}
                  {...register("jornada", {
                    required: {
                      value: true,
                      message: "Debes seleccionar una jornada"
                    }
                  })}
                >
                  <MenuItem 
                  value={0}>Selecciona una jornada</MenuItem>
                  {opcionesJornada.map((opcion) => (
                    <MenuItem key={opcion.value} value={opcion.value}>
                      {opcion.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.jornada && (
                  <Typography sx={{ color: 'red', fontSize: '0.7rem' }}>
                    {errors.jornada.message}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <Select
                  className='custom-text-field'
                  variant="outlined"
                  required            
                  id="asignacion"
                  name="asignacion"
                  defaultValue={0}
                  {...register("asignacion", {
                    required: {
                      value: true,
                      message: "Debes seleccionar una asignacion"
                    }
                  })}
                >
                  <MenuItem 
                  value={0}>Selecciona una asignacion</MenuItem>
                  {opcionesAsignacion.map((opcion) => (
                    <MenuItem key={opcion.value} value={opcion.value}>
                      {opcion.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.asignacion && (
                  <Typography sx={{ color: 'red', fontSize: '0.7rem' }}>
                    {errors.asignacion.message}
                  </Typography>
                )}
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
