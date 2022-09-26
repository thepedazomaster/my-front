import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} method={"post"} className="login">
      <Form.Group>
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese su usuario"
          {...register("user", { required: true })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="ingrese su contraseña"
          {...register("pass", { required: true, minLength: 6 })}
        />
      </Form.Group>
      <Button type="submit" className="boton">
        Ingresar
      </Button>
    </Form>
  );
};
