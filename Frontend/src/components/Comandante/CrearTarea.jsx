import React from 'react'
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box } from '@mui/material';
import TextField from "@mui/material/TextField";
import { useForm } from 'react-hook-form';
import '../styles/login.css'
import { Typography } from '@mui/material';
import { create } from '@mui/material/styles/createTransitions';
import { createTask } from 'api/tareas/tareas';

export default function CrearTarea() {

    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = handleSubmit( (data) => {
        createTask(data);
        navigate('/comandante/tareas');
    }); 


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
                        value:20,
                        message:"El nombre debe ser menor a 20 caracteres"
                    }
                    })}
                />
                {errors.username && <Typography sx={{color:'red', fontSize:'0.7rem'}}>
                  {errors.username.message}
                </Typography>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                className='custom-text-field'
                  variant="outlined"
                  required
                  id="descripcion"
                  label="Introduce Descripcion"
                  name="descripcion"
                  autoComplete="descripcion"
                  {...register("descripcion",{
                    required:{
                    value:true,
                    message:"Debes introducir una descripcion"
                    },
                    minLength:{
                        value:5,
                        message:"La descripcion debe ser mayor a 15 caracteres"
                    },
                    maxLength:{
                        value:215,
                        message:"La descripcion debe ser menor a 215 caracteres"
                    }
                    })}
                />
                {errors.password && <Typography sx={{color:'red', fontSize:'0.7rem'}}>
                  {errors.password.message}
                </Typography>}
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
    