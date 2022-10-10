import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";

type Inputs = {
  addCurso: string;
};

export const NewAlumnoCurso = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)} method={"post"} className="login">
      <Form.Group>
        <Form.Label>Cursos disponibles</Form.Label>
        <Form.Select
          {...register("addCurso", {
            required: true,
            validate: (value) => parseInt(value) !== 0,
          })}
        >
          <option value="0">Seleccione una opcion</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit" className="boton">
        Registrar
      </Button>
    </Form>
  );
};
