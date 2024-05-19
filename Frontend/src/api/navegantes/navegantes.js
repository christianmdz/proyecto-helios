import axios from "axios";
import { BaseUrl } from "../../config/index";
import { useEffect, useState } from "react";

export const getTripulante = async (idTripulante) => {
  try {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `${BaseUrl.navegante}/info-tripulacion/${idTripulante}`,
      config
    );
    return response.data;
  } catch (error) {
    throw new Error("Get crew failed");
  }
};

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

export function getOneCrew(id) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${BaseUrl.navegante}/info-tripulacion/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => response.json())
      .then((navegantes) => setData(navegantes));
  }, [id]);
  return { data };
}

export function projectInCrew(id) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${BaseUrl.navegante}/proyectos-de-tripulante/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((navegantes) => setData(navegantes))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData(null); // Set data to null or handle error as needed
      });
  }, [id]);
  return { data };
}

export function taskInCrew(id) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${BaseUrl.navegante}/tareas-de-tripulante/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((navegantes) => setData(navegantes))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData(null); // Set data to null or handle error as needed
      });
  }, [id]);
  return { data };
}
