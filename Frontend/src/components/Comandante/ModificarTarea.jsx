import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box,Select } from '@mui/material';
import TextField from "@mui/material/TextField";
import { useForm } from 'react-hook-form';
import { updateTask } from '../../api/tareas/tareas';
import { useParams } from 'react-router-dom';
import '../../styles/login.css'



export default function ModificarTarea({data}) {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors} } = useForm({
        defaultValues: {
            responsable: data.responsable
        }
    });

    const {id} = useParams();

    const onSubmit = handleSubmit( (data) => {
        const dataUpdate = {...data, id: id};
        console.log(dataUpdate);
        updateTask(dataUpdate);
        navigate('/comandante/tareas');
    });


    const opcionesResponsable = [
        {value: "blopera", label: "Benito"},
        {value: "tbieszka", label: "Tania"},
        {value: "tormaechea", label: "Tino"}
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
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop:'3vh', paddingBottom:'3vh' }}>
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
                      id="nombre"
                      label="Nombre de la tarea"
                      name="nombre"
                      defaultValue={data.nombre}
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
                      defaultValue={data.campo}            
                      id="campo"
                      name="campo"
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
                      id="responsable"
                      name="responsable"
                      defaultValue={0}
                      {...register("responsable", {
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
                    {errors.responsable && (
                      <Typography sx={{ color: 'red', fontSize: '0.7rem' }}>
                        {errors.responsable.message}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      className='custom-text-field'
                      variant="outlined"
                      multiline
                      maxRows={4}
                      required
                      id="descripcion"
                      label="Descripción de la tarea"
                      name="descripcion"
                      defaultValue={data.descripcion}
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
                      defaultValue={data.frecuencia}
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
                    backgroundColor: '#50a4c2',
                    color: 'white',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'darkviolet',
                      boxShadow: '0px 4px 8px rgba(138, 43, 226, 0.5)',
                    },
                  }}
                  >
                  Modificar tarea
                </Button>
              </Box>
          </form>
        </Box>
    </>    
  )
}
