import { BaseUrl } from "../../config/index";
import { useEffect, useState } from "react";

export function getAllTasks() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${BaseUrl.tarea}/info-tareas`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => response.json())
      .then((tareas) => setData(tareas));
  }, []);
  return { data };
}

export function getOneTask(id) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${BaseUrl.tarea}/info-tareas/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => response.json())
      .then((tareas) => setData(tareas));
  }, [id]);
  return { data };
}

export async function updateTask(data) {
  const response = await fetch(`${BaseUrl.tarea}/modificar-tarea`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Error al modificar tarea");
  }
}

export function createTask(data) {
  fetch(`${BaseUrl.tarea}/nueva-tarea`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
}
