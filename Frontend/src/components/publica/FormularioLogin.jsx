import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth/auth';

export default function FormularioLogin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e)=>{
        e.preventDefault();
        
        try{
            const token = await login({username, password});
            localStorage.setItem("token", token);
            navigate("/comandante");
            
        } catch (error){
            setError("Authentication failed");
        }
    }

  return (
    <div className="flex flex-col  md:max-w-xl m-4" >
            <form onSubmit={handleLogin} >
                <div className="mb-3">
                    <label htmlFor="username" className=" text-sm font-semibold leading-6 text-gray-900">Nombre de Usuario</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} type="username" name="username" id="username" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className=" text-sm font-semibold leading-6 text-gray-900">Introduce tu contraseña</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" autoComplete="given-name" className=" w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Enviar</button>
            </form>
  </div>
  )
}
