import React, { useCallback, useEffect, useState } from "react";
import administradorApi from "../assets/connection";
import { Alumnos } from "../interfaces/interfaceAlumnos";

interface Props {
  id?: any | null;
}

export const useAlumnos = ({ id }: Props) => {
  const [AlumnosState, setAlumnosState] = useState<Alumnos[]>([]);
  const [AlumnoState, setAlumnoState] = useState<Alumnos>();

  const loadAlumnos = useCallback(async () => {
    if (!id) {
      const resp = await administradorApi.get("/alumnos");
      setAlumnosState([...resp.data]);
      return resp.data;
    } else {
      const resp = await administradorApi.get(`/alumnos/${id}`);
      setAlumnoState(resp.data);
      return resp.data;
    }
  }, [id]);

  useEffect(() => {
    loadAlumnos();
  }, [loadAlumnos]);

  const fullName = (alumnos: Alumnos | undefined) => {
    return (
      alumnos?.primer_Nombre +
      " " +
      (alumnos?.segundo_Nombre ? alumnos.segundo_Nombre : "") +
      " " +
      alumnos?.primer_Apellido +
      " " +
      alumnos?.segundo_Apellido
    );
  };
  const createAlumnosCursos = async (data: any) => {
    const resp = await administradorApi.post("/alumnosCursos", { ...data });
    loadAlumnos();
    return resp.status;
  };
  const createAlumno = async (data: any) => {
    const resp = await administradorApi.post("/alumnos", { ...data });
    loadAlumnos();
    return resp.status;
  };
  const deleteAlumno = async (idalumno: any) => {
    const resp = await administradorApi.delete(`/alumnos/${idalumno}`);
    loadAlumnos();
    return resp.status;
  };
  const deleteAlumnoCurso = async (idalumno: any) => {
    const resp = await administradorApi.delete(`/alumnosCursos/${idalumno}`);
    loadAlumnos();
    return resp.status;
  };
  return {
    AlumnosState,
    fullName,
    AlumnoState,
    loadAlumnos,
    createAlumnosCursos,
    createAlumno,
    deleteAlumno,
    deleteAlumnoCurso,
  };
};
