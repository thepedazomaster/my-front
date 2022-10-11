import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as IconEdit } from "../assets/img/editarimg.svg";
import { ReactComponent as IconDel } from "../assets/img/eliminarimg.svg";
import { AlumnoCurso } from "../interfaces/interfaceAlumnos";
interface Props {
  data?: AlumnoCurso[];
  del?: boolean;
  edit?: boolean;
  onClickEdit?: () => void;
  onClickDel?: () => void;
}

export const AlumnosCursosTable = ({
  data,
  del,
  edit,
  onClickDel,
  onClickEdit,
}: Props) => {
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
        {data?.map((item) => (
          <tr>
            <td> {item.Curso.curso}</td>
            <td>{item.Curso.codigo}</td>
            <td>{item.Curso.creditos}</td>
            {edit && (
              <td>
                <IconEdit width={25} onClick={onClickEdit} />
              </td>
            )}
            {del && (
              <td>
                <IconDel width={25} onClick={onClickDel} />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
