import { BaseUrl } from "../../config/index";
import { useEffect, useState } from "react";

export function getAllCrew() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${BaseUrl.navegante}/info-tripulacion`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => response.json())
      .then((navegantes) => setData(navegantes));
  }, []);
  return { data };
}
