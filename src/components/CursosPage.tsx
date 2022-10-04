import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonCreate } from "./ButtonCreate";
import { CursosTable } from "./CursosTable";
import { FilterButton } from "./FilterButton";

export const CursosPage = () => {
  const navigate = useNavigate();
  return (
    <section className="page">
      <ButtonCreate
        tittle="Crear curso"
        onClick={() => navigate("/NewCurso")}
      />
      <FilterButton size="50px" />
      <CursosTable />
    </section>
  );
};
