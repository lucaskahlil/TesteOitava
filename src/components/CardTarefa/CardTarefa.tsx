import React from "react";
import { BtnEdit, CardItem, CheckContainer } from "./style";
import { useState } from "react";
import { TarefaPayload } from "../../utils/types/request";

interface CardTarefaProps {
  tarefa: TarefaPayload;
}

export default function CardTarefa({ tarefa }: CardTarefaProps) {
  const [isCheck, setIsCheck] = useState<boolean>(tarefa.done);

  return (
    <CardItem>
      <CheckContainer done={isCheck}>
        <input
          type="checkbox"
          checked={isCheck}
          onChange={(e) => setIsCheck(e.target.checked)}
        />
        <label>{tarefa.name}</label>
      </CheckContainer>
      <BtnEdit>Editar</BtnEdit>
    </CardItem>
  );
}
