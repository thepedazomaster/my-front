import axios from "axios";
import React, { useEffect, useState } from "react";
import administradorApi from "../assets/connection";
import { Cursos } from "../interfaces/interfaceCursos";

export const useCursos = () => {
  const [cursosState, setCursosState] = useState<Cursos[]>([]);
  useEffect(() => {
    loadCursos();
  }, []);

  const loadCursos = async () => {
    let cancelToken = axios.CancelToken.source().token;

    try {
      const resp = await administradorApi.get("/cursos", { cancelToken });
      setCursosState(resp.data);

      return resp.data;
    } catch (error) {}
  };
  const createCurso = async (data: any) => {
    let cancelToken = axios.CancelToken.source().token;

    const resp = await administradorApi.post(
      "/cursos",
      { ...data },
      { cancelToken }
    );
    loadCursos();
    return resp.status;
  };

  return { cursosState, loadCursos, createCurso };
};
