import React from 'react'
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box,Select } from '@mui/material';
import TextField from "@mui/material/TextField";
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { createTask } from '../../api/tareas/tareas';
import '../../styles/login.css'

export default function CrearTarea() {

    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: {errors} } = useForm({
      defaultValues: {
        idResponsable: 0
      }
    });

    const onSubmit = handleSubmit( (data) => {
        console.log(data);
        createTask(data);
        navigate('/comandante/tareas');
    });
    
    const opcionesResponsable = [
      {value: 2, label: "Benito"},
      {value: 3, label: "Tania"},
      {value: 4, label: "Tino"}
    ];

    const opcionesCampo = [
      {value: "INGENIERIA", label: "INGENIERIA"},
      {value: "CIENCIA", label: "CIENCIA"},
      {value: "NAVEGACION", label: "NAVEGACION"}
    ];

    const opcionesFrecuencia = [
      {value: "diaria", label: "DIARIA"},
      {value: "semanal", label: "SEMANAL"},
      {value: "mensual", label: "MENSUAL"},
      {value: "trimestral", label: "TRIMESTRAL"}
  ];

    return (
        <form onSubmit={onSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2vh'
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
                  id="nombre"
                  label="Nombre de la tarea"
                  name="nombre"
                  autoComplete="nombre"
                  {...register("nombre",{
                    required:{
                    value:true,
                    message:"Debes introducir un nombre para la tarea"
                    },
                    minLength:{
                        value:3,
                        message:"El nombre debe ser mayor a dos caracteres"
                    },
                    maxLength:{
                        value:40,
                        message:"El nombre debe ser menor a 40 caracteres"
                    }
                    })}
                />
                {errors.nombre && <Typography sx={{color:'red', fontSize:'0.7rem'}}>
                  {errors.nombre.message}
                </Typography>}
              </Grid>
              <Grid item xs={12}>
                <Select
                  className='custom-text-field'
                  variant="outlined"
                  required            
                  id="campo"
                  name="campo"
                  defaultValue={0}
                  {...register("campo", {
                    required: {
                      value: true,
                      message: "Debes seleccionar un campo"
                    }
                  })}
                >
                  <MenuItem 
                  value={0}>Selecciona un campo</MenuItem>
                  {opcionesCampo.map((opcion) => (
                    <MenuItem key={opcion.value} value={opcion.value}>
                      {opcion.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.campo && (
                  <Typography sx={{ color: 'red', fontSize: '0.7rem' }}>
                    {errors.campo.message}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <Select
                  className='custom-text-field'
                  variant="outlined"
                  required            
                  id="idResponsable"
                  name="idResponsable"
                  defaultValue={0}
                  {...register("idResponsable", {
                    required: {
                      value: true,
                      message: "Debes seleccionar un responsable"
                    }
                  })}
                >
                  <MenuItem 
                  value={0}>Selecciona un responsable</MenuItem>
                  {opcionesResponsable.map((opcion) => (
                    <MenuItem key={opcion.value} value={opcion.value}>
                      {opcion.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.idResponsable && (
                  <Typography sx={{ color: 'red', fontSize: '0.7rem' }}>
                    {errors.idResponsable.message}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} >
                <TextField
                  className='custom-text-field'
                  variant="outlined"
                  required
                  id="descripcion"
                  label="Descripción de la tarea"
                  name="descripcion"
                  autoComplete="descripcion"
                  {...register("descripcion",{
                    required:{
                    value:true,
                    message:"Debes introducir una descripcion para la tarea"
                    },
                    minLength:{
                        value:16,
                        message:"La descripcion debe ser mayor a quince caracteres"
                    },
                    maxLength:{
                        value:240,
                        message:"La descripción no puede ser mayor de 240 caracteres"
                    }
                    })}
                />
                {errors.descripcion && <Typography sx={{color:'red', fontSize:'0.7rem'}}>
                  {errors.descripcion.message}
                </Typography>}
              </Grid>
              <Grid item xs={12}>
                <Select
                  className='custom-text-field'
                  variant="outlined"
                  required            
                  id="frecuencia"
                  name="frecuencia"
                  defaultValue={0}
                  {...register("frecuencia", {
                    required: {
                      value: true,
                      message: "Debes seleccionar una frecuencia"
                    }
                  })}
                >
                  <MenuItem 
                  value={0}>Selecciona una frecuencia</MenuItem>
                  {opcionesFrecuencia.map((opcion) => (
                    <MenuItem key={opcion.value} value={opcion.value}>
                      {opcion.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.frecuencia && (
                  <Typography sx={{ color: 'red', fontSize: '0.7rem' }}>
                    {errors.frecuencia.message}
                  </Typography>
                )}
              </Grid>      
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#DBA44E',
                color: 'white',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: 'darkviolet',
                  boxShadow: '0px 4px 8px rgba(138, 43, 226, 0.5)',
                },
              }}
              >
              Launch
            </Button>
          </Box>
        </form>
      );
    }
    