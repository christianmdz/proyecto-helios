import { BaseUrl } from "../../config/index";
import { useEffect, useState } from "react";

export function getAllProjects() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${BaseUrl.proyecto}/info-proyectos`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => response.json())
      .then((proyectos) => setData(proyectos));
  }, []);
  return { data };
}

export function getOneProject(id) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${BaseUrl.proyecto}/info-proyectos/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => response.json())
      .then((proyectos) => setData(proyectos));
  }, [id]);
  return { data };
}

export async function updateProject(data) {
  const response = await fetch(`${BaseUrl.proyecto}/modificar-proyecto`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Error al modificar proyecto");
  }
}

export function createProject(data) {
  fetch(`${BaseUrl.proyecto}/nuevo-proyecto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  })
  ;
}

export function deleteProject(id) {
  fetch(`${BaseUrl.proyecto}/eliminar-proyecto/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
}
