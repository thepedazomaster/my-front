import React, { useEffect, useState } from "react";
import administradorApi from "../assets/connection";
import { Profesores } from "../interfaces/interfaceProfesores";

export const useProfesores = () => {
  const [profesoresState, setProfesoresState] = useState<Profesores[]>([]);
  useEffect(() => {
    loadprofesores();
  }, []);

  const loadprofesores = async () => {
    const resp = await administradorApi.get("/profesores");
    setProfesoresState(resp.data);
    return resp.data;
  };
  const createProfesor = async (data: any) => {
    const resp = await administradorApi.post("/profesores", { ...data });
    loadprofesores();
    return resp.status;
  };
  return { profesoresState, loadprofesores, createProfesor };
};
