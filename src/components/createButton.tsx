import React from "react";
import { Button } from "react-bootstrap";

interface Props {
  tittle: string;
  onclick: () => void;
}

export const createButton = ({ tittle, onclick }: Props) => {
  return (
    <Button size="lg" onClick={onclick}>
      <b>{tittle}</b>
    </Button>
  );
};
