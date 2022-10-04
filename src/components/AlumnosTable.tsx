import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NewAlumno } from "./forms/NewAlumno";

interface Props {
  del?: boolean;
  edit?: boolean;
}

export const AlumnosTable = ({ del, edit }: Props) => {
  return (
    <>
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
            <td>
              <Link to={"/Cursos"} className="link-tabla">
                Juan Pablo Chaparro Vasques
              </Link>
            </td>
            <td>2131231414</td>
            {edit && <td>Editar</td>}
            {del && <td>Eliminar</td>}
          </tr>
        </tbody>
      </Table>
    </>
  );
};
