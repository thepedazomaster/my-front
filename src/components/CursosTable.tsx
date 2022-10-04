import React from "react";
import { Table } from "react-bootstrap";
interface Props {
  del?: boolean;
  edit?: boolean;
}

export const CursosTable = ({ del, edit }: Props) => {
  return (
    <Table variant="dark" hover className="table-edit">
      <thead>
        <tr>
          <th>Nombre del Curso</th>
          <th>Codigo</th>
          <th>Creditos</th>
          {edit && <th>Editar</th>}
          {del && <th>Eliminar</th>}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Linea de profundizacion</td>
          <td>ef123213</td>
          <td>4</td>
          {edit && <td>Editar</td>}
          {del && <td>Eliminar</td>}
        </tr>
      </tbody>
    </Table>
  );
};
