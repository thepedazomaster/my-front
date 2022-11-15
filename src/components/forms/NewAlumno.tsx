import React, { useContext, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { useAlumnos } from "../../hooks/useAlumnos";
import { useNavigate, useParams } from "react-router-dom";
type Inputs = {
  fname: string;
  sname?: string;
  flastname: string;
  slastname: string;
  identificacion: string;
};
interface Props {
  update?: boolean;
}
export const NewAlumno = ({ update }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { authState } = useContext(AuthContext);
  const params = useParams();
  const { createAlumno, AlumnoState } = useAlumnos({ id: params.idUser });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createAlumno({ ...data, profe: authState.user?.id });
    navigate("/Alumnos");
  };
  useEffect(() => {
    console.log(AlumnoState?.segundo_Apellido);
  }, [AlumnoState]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} method={"post"} className="login">
      <Form.Group>
        <Form.Label>Primer nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese su nombre"
          {...register("fname", { required: true })}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Segundo nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese su segundo nombre"
          {...register("sname", {})}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Primer apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese su primer apellido"
          {...register("flastname", {
            required: true,
          })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Segundo apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese su identificacion"
          {...register("slastname", { required: true })}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Numero de identificacion</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese su identificacion"
          {...register("identificacion", { required: true })}
        />
      </Form.Group>

      <Button type="submit" className="boton">
        {authState.isLogged ? "Registrar" : "Enviar"}
      </Button>
    </Form>
  );
};
