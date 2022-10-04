import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
type Inputs = {
  fname: string;
  sname: string;
  flastname: string;
  slastname: string;
  identificacion: string;
};
export const NewAlumno = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { authState } = useContext(AuthContext);
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
          {...register("slastname", {
            required: true,
          })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Primer apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese su contraseña"
          {...register("flastname", {
            required: true,
          })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Segundo apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese su nombre"
          {...register("slastname", { required: true })}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Numero de identificacion</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese su email"
          {...register("identificacion", { required: true })}
        />
      </Form.Group>
      <Button type="submit" className="boton">
        {authState.isLogged ? "Registrar" : "Enviar"}
      </Button>
    </Form>
  );
};
