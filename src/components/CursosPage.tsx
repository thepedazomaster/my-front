import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonCreate } from "./ButtonCreate";
import { CursosTable } from "./CursosTable";
import { FilterButton } from "./FilterButton";
import { useCursos } from "../hooks/useCursos";

export const CursosPage = () => {
  const navigate = useNavigate();
  const { cursosState } = useCursos();
  return (
    <section className="page">
      <ButtonCreate
        tittle="Crear curso"
        onClick={() => navigate("/NewCurso")}
      />
      <FilterButton size="50px" />
      <CursosTable data={cursosState} edit del />
    </section>
  );
};
