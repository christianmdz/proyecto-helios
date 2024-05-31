import { BaseUrl } from "../../config/index";
import { useEffect, useState } from "react";

export function getCrewInTask(id) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${BaseUrl.tarea}/tripulacion-en-tarea/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => response.json())
      .then((tripulantes) => setData(tripulantes));
  }, [id]);
  return { data };
}

export function createCrewInTask(data) {
  fetch(`${BaseUrl.comandante}/alta-navegante-tarea`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
}

export async function deleteCrewInTask(idTarea, idNavegante) {
  const response = await fetch(
    `${BaseUrl.comandante}/baja-navegante-tarea/${idTarea}/${idNavegante}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Error al eliminar tripulante");
  }
}
