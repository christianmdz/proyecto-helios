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
