import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as IconEdit } from "../assets/img/editarimg.svg";
import { ReactComponent as IconDel } from "../assets/img/eliminarimg.svg";
import { Cursos } from "../interfaces/interfaceCursos";
interface Props {
  data: Cursos[];
  del?: boolean;
  edit?: boolean;
  onClickEdit?: () => void;
  onClickDel?: () => void;
}

export const CursosTable = ({
  data,
  del,
  edit,
  onClickDel,
  onClickEdit,
}: Props) => {
  const [dataState, setDataState] = useState<Cursos[]>([]);
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
        {data.map((item) => (
          <tr>
            <td> {item.curso}</td>
            <td>{item.codigo}</td>
            <td>{item.creditos}</td>
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
