import React, { useState, useContext, createContext} from "react";
import jwt_decode from jwt_decode;
import { useNavigate } from "react-router-dom"

/**
    * useAuth -> hook proveedor de AuthContext
    * export function AuthProvide
    * export const useAuth -> return useContext(AuthContext)
    * function useAuthProvider
    *      const [accessToken, setAccesToken]
    *      const navigate = useNavigate
    *      const logout = () => {updateToken, navigate}
    *      const updateToken
    *      const user = accesToekn && jwt_decode(accessToken)
    *      return {user, accessToken, updateToken, logout}
*/