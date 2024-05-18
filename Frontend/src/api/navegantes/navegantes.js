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
