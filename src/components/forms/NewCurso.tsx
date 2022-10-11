import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { useCursos } from "../../hooks/useCursos";
import { useNavigate } from "react-router-dom";

type Inputs = {
  curso: string;
  codigo: string;
  creditos: number;
};

export const NewCurso = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { authState } = useContext(AuthContext);
  const { createCurso } = useCursos();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createCurso({ ...data });
    navigate("/Cursos");
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)} method={"post"} className="login">
      <Form.Group>
        <Form.Label>Nombre del Curso</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese nombre de curso"
          {...register("curso", { required: true })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Codigo</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese el codigo"
          {...register("codigo", {
            required: true,
          })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>creditos</Form.Label>
        <Form.Control
          type="number"
          placeholder="ingrese el numero de creditos"
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
