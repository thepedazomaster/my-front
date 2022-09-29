import { Table } from "react-bootstrap";

interface Props {
  del?: boolean;
  edit?: boolean;
}

export const AlumnosTable = ({ del, edit }: Props) => {
  return (
    <Table variant="dark" hover className="table-edit">
      <thead>
        <tr>
          <th>Nombre del Alumno</th>
          <th>identificación</th>
          {edit && <th>Editar</th>}
          {del && <th>Eliminar</th>}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Juan Pablo Chaparro Vasques</td>
          <td>2131231414</td>
          {edit && <td>Editar</td>}
          {del && <td>Eliminar</td>}
        </tr>
      </tbody>
    </Table>
  );
};
