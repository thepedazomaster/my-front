import React, { useEffect, useState } from "react";
import administradorApi from "../assets/connection";

export const useProfesores = () => {
  const [profesoresState, setProfesoresState] = useState([]);
  useEffect(() => {
    loadprofesores();
  }, []);

  const loadprofesores = async () => {
    const resp = await administradorApi.get("/profesores");
    setProfesoresState(resp.data);
    return resp.data;
  };
  return { profesoresState };
};
