import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as IconEdit } from "../assets/img/editarimg.svg";
import { ReactComponent as IconDel } from "../assets/img/eliminarimg.svg";
import { useAlumnos } from "../hooks/useAlumnos";

interface Props {
  del?: boolean;
  edit?: boolean;
  onClickEdit?: () => void;
  onClickDel?: () => void;
}

export const AlumnosTable = ({ del, edit, onClickEdit, onClickDel }: Props) => {
  const { AlumnosState } = useAlumnos();
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
              <Link to={`/AlumnoProfile/${1}`} className="link-tabla">
                Juan Pablo Chaparro Vasques
              </Link>
            </td>
            <td>2131231414</td>
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
    </>
  );
};
