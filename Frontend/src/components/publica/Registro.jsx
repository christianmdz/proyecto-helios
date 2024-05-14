import { registerUser } from '../../api/auth/register';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Registro() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleRegistro = (e) => {
        e.preventDefault();
        const data = {username: username, password: password, nombre: nombre, apellido: apellido, email: email+"helios.xr"};
        registerUser(data);
        navigate('/');
    }
        


  return (
    <div className='flex flex-col justify-center items-center mt-2'>
            <div className="flex flex-col  md:max-w-xl m-4 " >
                <form onSubmit={handleRegistro}>
                    <div className="mb-3">
                        <label htmlFor="username" className=" text-sm font-semibold leading-6 text-gray-900">Username</label>
                        <input onChange={(e)=>{setUsername(e.target.value)}} type="username" name="username" id="username" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className=" text-sm font-semibold leading-6 text-gray-900">Password</label>
                        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombre" className=" text-sm font-semibold leading-6 text-gray-900">Nombre</label>
                        <input onChange={(e)=>{setNombre(e.target.value)}} type="name" name="nombre" id="nombre" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="apellido" className=" text-sm font-semibold leading-6 text-gray-900">Nombre</label>
                        <input onChange={(e)=>{setApellido(e.target.value)}} type="text" name="apellido" id="apellido" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className=" text-sm font-semibold leading-6 text-gray-900">E-Mail</label>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="text" name="email" id="email" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>      
                    <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
                </form>
            </div>
        </div>
  )
}
