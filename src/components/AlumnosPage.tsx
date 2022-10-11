import { useNavigate } from "react-router-dom";
import { AlumnosTable } from "./AlumnosTable";
import { FilterButton } from "./FilterButton";
import { ButtonCreate } from "./ButtonCreate";
import { useAlumnos } from "../hooks/useAlumnos";

export const AlumnosPage = () => {
  const navigate = useNavigate();
  const { AlumnosState } = useAlumnos({});
  return (
    <section className="page">
      <ButtonCreate
        tittle="Crear alumno"
        onClick={() => navigate("/NewAlumno")}
      />
      <FilterButton size="50px" />
      <AlumnosTable data={AlumnosState} edit del />
    </section>
  );
};
