import { registerUser } from '../../api/auth/register';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';


export default function Registro() {
    
    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors} } = useForm();


    const onSubmit = handleSubmit( (data) => {
        const dataRegistro = {...data, email: data.username+"@helios.xr"};
        console.log(dataRegistro);  
        // registerUser(data);
        navigate('/');
    });
        


  return (
    <div className='flex flex-col justify-center items-center mt-2'>
            <div className="flex flex-col  md:max-w-xl m-4 " >
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className=" text-sm font-semibold leading-6 text-gray-900">Introduza un nombre de ususario</label>
                        <input {...register("username",{
                            required:{
                            value:true,
                            message:"Debes introducir un nombre de usuario"
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
                        type="username" name="username" id="username" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        {errors.username && <span className="text-red-500 text-xs">{errors.username.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className=" text-sm font-semibold leading-6 text-gray-900">Introduza un Password</label>
                        <input {...register("password",{
                            required:{
                            value:true,
                            message:"Debes introducir un nombre"
                            }})} 
                            type="password" name="password" id="password" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombre" className=" text-sm font-semibold leading-6 text-gray-900">Introduza su nombre</label>
                        <input {...register("nombre",{
                            required:{
                            value:true,
                            message:"Debes introducir un nombre"
                            },
                            minLength:{
                                value:3,
                                message:"El nombre debe ser mayor a dos caracteres"
                            },
                            maxLength:{
                                value:20,
                                message:"El nombre debe ser menor a 20 caracteres"
                            }
                            })}  type="name" name="nombre" id="nombre" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        {errors.nombre && <span className="text-red-500 text-xs">{errors.nombre.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="apellido" className=" text-sm font-semibold leading-6 text-gray-900">Introduza su apellido</label>
                        <input {...register("apellido",{
                            required:{
                            value:true,
                            message:"Debes introducir un apellido"
                            },
                            minLength:{
                                value:4,
                                message:"El apellido debe tener más de 3 caracteres"
                            },
                            maxLength:{
                                value:20,
                                message:"El nombre debe ser menor a 20 caracteres"
                            }
                            })} type="text" name="apellido" id="apellido" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        {errors.apellido && <span className="text-red-500 text-xs">{errors.apellido.message}</span>}
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="email" className=" text-sm font-semibold leading-6 text-gray-900">E-Mail</label>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="text" name="email" id="email" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>       */}
                    <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
                </form>
            </div>
        </div>
  )
}
