import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";

type Inputs = {
  curso: string;
  codigo: string;
  creditos: number;
};

export const NewCurso = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { authState } = useContext(AuthContext);
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)} method={"post"} className="login">
      <Form.Group>
        <Form.Label>Nombre del Curso</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese su nombre"
          {...register("curso", { required: true })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Codigo</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese su segundo nombre"
          {...register("codigo", {
            required: true,
          })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>creditos</Form.Label>
        <Form.Control
          type="number"
          placeholder="ingrese su contraseña"
          {...register("creditos", {
            required: true,
          })}
        />
      </Form.Group>
      <Button type="submit" className="boton">
        {authState.isLogged ? "Registrar" : "Enviar"}
      </Button>
    </Form>
  );
};
