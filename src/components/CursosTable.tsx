import React from "react";
import { Table } from "react-bootstrap";
interface Props {
  del?: boolean;
  edit?: boolean;
}

export const CursosTable = ({ del, edit }: Props) => {
  return (
    <Table variant="dark" hover>
      <thead>
        <tr>
          <th>Nombre del Alumno</th>
          {edit && <th>Editar</th>}
          {del && <th>Eliminar</th>}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Juan Pablo Chaparro Vasques</td>
          {edit && <td>Editar</td>}
          {del && <td>Eliminar</td>}
        </tr>
      </tbody>
    </Table>
  );
};
