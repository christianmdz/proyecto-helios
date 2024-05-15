import { useState, useEffect } from "react";
import { BaseUrl } from "../../config/index";

export function getCrewInProject(id) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${BaseUrl.proyecto}/tripulacion-en-proyecto/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => response.json())
      .then((tripulantes) => setData(tripulantes));
  }, [id]);
  return { data };
}

export function createCrewInProject(data) {
  fetch(`${BaseUrl.comandante}/alta-navegante-proyecto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
}

export function deleteCrewInProject(idProyecto, idNavegante) {
  fetch(
    `${BaseUrl.comandante}/baja-navegante-proyecto/${idProyecto}/${idNavegante}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
}
