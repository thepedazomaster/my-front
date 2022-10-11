import { useEffect, useState } from "react";
import administradorApi from "../assets/connection";
import { Cuentas } from "../interfaces/interfaceCuentas";

export const useCuentas = () => {
  const [cuentasState, setCuentasState] = useState<Cuentas[]>([]);
  useEffect(() => {
    loadCuentas();
  }, []);

  const loadCuentas = async () => {
    const resp = await administradorApi.get("/tipocuenta");
    setCuentasState([...resp.data]);
    return resp.data;
  };
  return { cuentasState };
};
