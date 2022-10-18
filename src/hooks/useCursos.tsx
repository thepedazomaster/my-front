import React, { useEffect, useState } from "react";
import administradorApi from "../assets/connection";
import { Cursos } from "../interfaces/interfaceCursos";

export const useCursos = () => {
  const [cursosState, setCursosState] = useState<Cursos[]>([]);
  useEffect(() => {
    loadCursos();
  }, []);
  

  const loadCursos = async () => {
    const resp = await administradorApi.get("/cursos");
    setCursosState(resp.data);

    return resp.data;
  };
  const createCurso = async (data: any) => {
    const resp = await administradorApi.post("/cursos", { ...data });
    loadCursos();
    return resp.status;
  };

  return { cursosState, loadCursos, createCurso };
};
