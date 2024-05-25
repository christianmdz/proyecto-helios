import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box,Select } from '@mui/material';
import TextField from "@mui/material/TextField";
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { updateProject } from '../../api/proyectos/proyectos';
import '../../styles/login.css'

export default function ModificarProyecto({data}) {

    const navigate = useNavigate();
    const {id} = useParams();
    const { register, handleSubmit, formState: {errors} } = useForm();
    const handleBack = () => {
      window.location.href = '/comandante/proyectos';
    }

    const opcionesDirector = [
        {value: 2, label: "Benito"},
        {value: 3, label: "Tania"},
        {value: 4, label: "Tino"}
    ];

    const opcionesCampo = [
        {value: "INGENIERIA", label: "INGENIERIA"},
        {value: "CIENCIA", label: "CIENCIA"},
        {value: "NAVEGACION", label: "NAVEGACION"}
    ];

    const opcionesEtapa = [ 
        {value: "proyectado", label: "PROYECTADO"},
        {value: "activo", label: "ACTIVO"},
        {value: "pausado", label: "PAUSADO"},
        {value: "cancelado", label: "CANCELADO"},
        {value: "terminado", label: "TERMINADO"}
    ];

    const onSubmit = handleSubmit( (data) => {
        const dataUpdate = {...data, id: id};
        console.log(dataUpdate);
        updateProject(dataUpdate);
        navigate('/comandante/proyectos');
    });
    
    // TODO: revisar opcion por defecto director, comprobar id en data input

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
              label="Nombre del proyecto"
              name="nombre"
              defaultValue={data.nombre}
              autoComplete="nombre"
              {...register("nombre",{
                required:{
                value:true,
                message:"Debes introducir un nombre para El proyecto"
                },
                minLength:{
                    value:3,
                    message:"El nombre debe ser mayor a dos caracteres"
                },
                maxLength:{
                    value:70,
                    message:"El nombre debe ser menor a 70 caracteres"
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
              id="idDirector"
              name="idDirector"
              defaultValue={0}
              {...register("idDirector", {
                required: {
                  value: true,
                  message: "Selecciona un director"
                }
              })}
            >
              <MenuItem 
              value={0}>Selecciona un director</MenuItem>
              {opcionesDirector.map((opcion) => (
                <MenuItem key={opcion.value} value={opcion.value}>
                  {opcion.label}
                </MenuItem>
              ))}
            </Select>
            {errors.idDirector && (
              <Typography sx={{ color: 'red', fontSize: '0.7rem' }}>
                {errors.idDirector.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Select
              className='custom-text-field'
              variant="outlined"
              required            
              id="campo"
              name="campo"
              defaultValue={data.campo}
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
          <Grid item xs={12} >
            <TextField
              className='custom-text-field'
              variant="outlined"
              multiline
              maxRows={4}
              required
              id="descripcion"
              label="Descripción del proyecto"
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
              <TextField
              className='custom-text-field'
              variant="outlined"
              required
              id="fechaInicio"
              label="Fecha de Inicio"
              name="fechaInicio"
              type="date"
              defaultValue={data.fechaInicio}
              InputLabelProps={{
                  shrink: true,
              }}
              {...register("fechaInicio", {
                  required: {
                  value: true,
                  message: "Debes seleccionar una fecha válida"
                  }
              })}
              />
              {errors.fechaInicio && <Typography sx={{ color: 'red', fontSize: '0.7rem' }}>
              {errors.fechaInicio.message}
              </Typography>}
          </Grid>
          <Grid item xs={12}>
              <TextField
              className='custom-text-field'
              variant="outlined"
              required
              id="fechaFin"
              label="Fecha de Fin"
              name="fechaFin"
              type="date"
              defaultValue={data.fechaFin}
              InputLabelProps={{
                  shrink: true,
              }}
              {...register("fechaFin", {
                  required: {
                  value: true,
                  message: "Debes seleccionar una fecha válida"
                  }
              })}
              />
              {errors.fechaFin && <Typography sx={{ color: 'red', fontSize: '0.7rem' }}>
              {errors.fechaFin.message}
              </Typography>}
          </Grid>
          
          <Grid item xs={12}>
            <Select
              className='custom-text-field'
              variant="outlined"
              required            
              id="etapa"
              name="etapa"
              defaultValue={data.etapa}
              {...register("etapa", {
                required: {
                  value: true,
                  message: "Debes seleccionar una etapa"
                }
              })}
            >
              <MenuItem 
              value={0}>Selecciona una etapa</MenuItem>
              {opcionesEtapa.map((opcion) => (
                <MenuItem key={opcion.value} value={opcion.value}>
                  {opcion.label}
                </MenuItem>
              ))}
            </Select>
            {errors.etapa && (
              <Typography sx={{ color: 'red', fontSize: '0.7rem' }}>
                {errors.etapa.message}
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
          Modificar proyecto
        </Button>
      </Box>
    </form>
  </Box>
  <Box
  sx={{
    display: 'flex',
    justifyContent: 'center', // Centra horizontalmente
    marginTop: '3vh', // Margen superior de 3vh
  }}
>
  <Button
    onClick={handleBack}
    type="button"
    variant="contained"
    sx={{
      backgroundColor: '#DBA44E',
      color: 'white',
      transition: 'background-color 0.3s ease',
      '&:hover': {
        backgroundColor: 'darkviolet',
        boxShadow: '0px 4px 8px rgba(138, 43, 226, 0.5)',
      },
      marginBottom: '3vh'
    }}
  >
    Volver a proyectos
  </Button>
</Box>
</> 
);
}
