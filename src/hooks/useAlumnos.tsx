import React, { useEffect, useState } from "react";
import administradorApi from "../assets/connection";

export const useAlumnos = () => {
  const [AlumnosState, setAlumnosState] = useState([]);
  useEffect(() => {
    loadAlumnos();
  }, []);
  const loadAlumnos = async () => {
    const resp = await administradorApi.get("/alumnos");
    return resp;
  };
  return { AlumnosState };
};
