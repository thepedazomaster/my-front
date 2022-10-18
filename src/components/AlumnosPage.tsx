import { useNavigate } from "react-router-dom";
import { AlumnosTable } from "./AlumnosTable";
import { FilterButton } from "./FilterButton";
import { ButtonCreate } from "./ButtonCreate";
import { useAlumnos } from "../hooks/useAlumnos";
import { Form } from "react-bootstrap";

export const AlumnosPage = () => {
  const navigate = useNavigate();
  const { onSearchId, onSearchName, filteredInfo } = useAlumnos({});

  return (
    <section className="page">
      <ButtonCreate
        tittle="Crear alumno"
        onClick={() => navigate("/NewAlumno")}
      />
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese el nombre"
          onChange={onSearchName}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>identificacion</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese la identificacion"
          onChange={onSearchId}
        />
      </Form.Group>
      <FilterButton size="50px" />
      <AlumnosTable data={filteredInfo()} edit del />
    </section>
  );
};
