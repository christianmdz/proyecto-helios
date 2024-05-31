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

export async function registerUser(data) {
  try {
    const response = await fetch(`${BaseUrl.auth}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error al registrar usuario");
    }

    const result = await response.json();
    return result.token; // Asegúrate de que la respuesta JSON contenga el token
  } catch (error) {
    throw new Error("Error al registrar usuario");
  }
}


export function getAuthorizedPath() {
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  if (decoded.rol === "ROLE_COMANDANTE") {
    return "/comandante";
  } else if (decoded.rol === "ROLE_COLONO") {
    return "/colono";
  } else {
    return "/trabajando";
  }
}

export function giveMeRol() {
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  return decoded.rol;
}

export function isAuthenticated() {
  return localStorage.getItem("token") !== null &&
    localStorage.getItem("token") !== undefined
    ? true
    : false;
}
