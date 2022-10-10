import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as IconEdit } from "../assets/img/editarimg.svg";
import { ReactComponent as IconDel } from "../assets/img/eliminarimg.svg";
interface Props {
  del?: boolean;
  edit?: boolean;
  onClickEdit?: () => void;
  onClickDel?: () => void;
}

export const CursosTable = ({ del, edit, onClickDel, onClickEdit }: Props) => {
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
      </tbody>
    </Table>
  );
};
