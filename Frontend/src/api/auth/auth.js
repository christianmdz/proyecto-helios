import axios from "axios";
import { BaseUrl } from "../../config/index";
import { jwtDecode } from "jwt-decode";

export const login = async (data) => {
  try {
    const response = await axios.post(`${BaseUrl.auth}/login`, data);
    return response.data.token;
  } catch (error) {
    throw new Error("Authentication failed");
  }
};

export function registerUser(data) {
  try {
    fetch(`${BaseUrl.auth}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw new Error("Error al registrar usuario");
  }
}

export function getAuthorizedPath() {
  const token = localStorage.getItem('token')
  const decoded = jwtDecode(token)
  if(decoded.rol === 'ROLE_COMANDANTE') {return '/comandante'}
  else {return '/'}

}

export function isAuthenticated() {
  return (localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined) ? true : false;
}