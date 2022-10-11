import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as IconEdit } from "../assets/img/editarimg.svg";
import { ReactComponent as IconDel } from "../assets/img/eliminarimg.svg";
import { useAlumnos } from "../hooks/useAlumnos";
import { Alumnos } from "../interfaces/interfaceAlumnos";

interface Props {
  data: Alumnos[];
  del?: boolean;
  edit?: boolean;
  onClickEdit?: () => void;
  onClickDel?: () => void;
}

export const AlumnosTable = ({
  data,
  del,
  edit,
  onClickEdit,
  onClickDel,
}: Props) => {
  const { fullName, deleteAlumno } = useAlumnos({});
  const navigate = useNavigate();
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
          {data.map((item) => (
            <tr>
              <td>
                <Link to={`/AlumnoProfile/${item.id}`} className="link-tabla">
                  {fullName(item)}
                </Link>
              </td>
              <td>{item.identificacion}</td>
              {edit && (
                <td>
                  <IconEdit width={25} onClick={onClickEdit} />
                </td>
              )}
              {del && (
                <td>
                  <IconDel
                    width={25}
                    onClick={() => {
                      deleteAlumno(item.id);
                      navigate("/");
                    }}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
