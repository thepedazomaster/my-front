import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CursosTable } from "./CursosTable";
import { NewAlumnoCurso } from "./forms/NewAlumnoCurso";

export const AlumnosProfile = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <section className="page">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th colSpan={2}>Informacion de Alumno</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre</td>
            <td>juan</td>
          </tr>
          <tr>
            <td>identificacion</td>
            <td>121231532</td>
          </tr>
        </tbody>
      </Table>
      <h2>Cursos registrados</h2>
      <CursosTable />
      <NewAlumnoCurso />
    </section>
  );
};
