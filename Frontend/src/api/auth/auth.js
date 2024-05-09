import axios from "axios"
import { BaseUrl } from "../../config/index"


export const login = async (data) => {
    try {
        const response = await axios.post(`${BaseUrl.auth}/login`, data);
        return response.data.token;
    }catch (error) {
      throw new Error("Authentication failed");
    }
}