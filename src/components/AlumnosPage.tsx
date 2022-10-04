import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AlumnosTable } from "./AlumnosTable";
import { FilterButton } from "./FilterButton";
import { ButtonCreate } from "./ButtonCreate";

export const AlumnosPage = () => {
  const navigate = useNavigate();
  return (
    <section className="page">
      <ButtonCreate tittle="Crear alumno" onClick={() => navigate("/")} />
      <FilterButton size="50px" />
      <AlumnosTable />
    </section>
  );
};
