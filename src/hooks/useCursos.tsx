import React, { useEffect, useState } from "react";
import administradorApi from "../assets/connection";

export const useCursos = () => {
  const [cursosState, setCursosState] = useState([]);
  useEffect(() => {
    loadCursos();
  }, []);

  const loadCursos = async () => {
    const resp = await administradorApi.get("/cursos");
    setCursosState(resp.data);
    console.log(resp.data);

    return resp.data;
  };
  return { cursosState };
};
