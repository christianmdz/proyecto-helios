import axios from "axios";
import { BaseUrl } from "../../config/index";
import { useEffect, useState } from "react";

export function getNaves() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch(`${BaseUrl.nave}/uno/1`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
  
    return { data };
  }
  
  export function getTripulantes() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch(`${BaseUrl.nave}/info-tripulacion`)
        .then((response) => response.json())
        .then((tripulantes) => setData(tripulantes));
    }, []);
  
    return { data };
  }
  
  export function getMisiones() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch(`${BaseUrl.nave}/mision/1`)
        .then((response) => response.json())
        .then((misiones) => setData(misiones));
    }, []);
    return { data };
  }