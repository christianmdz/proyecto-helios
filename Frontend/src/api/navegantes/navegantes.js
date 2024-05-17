import axios from "axios";
import { BaseUrl } from "../../config/index";

export const getTripulante = async (idTripulante) => {
    try {
      const token = localStorage.getItem('token');
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const response = await axios.get(`${BaseUrl.navegante}/info-tripulacion/${idTripulante}`, config);
      return response.data;
      
    } catch (error) {
      throw new Error("Get crew failed");
    }
  };