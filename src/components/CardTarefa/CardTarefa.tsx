import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { BtnEdit, CardItem, CheckContainer } from "./style";
import { BsPencil } from 'react-icons/bs'
import { useState } from "react";
import { TarefaPayload } from "../../utils/types/request";

interface CardTarefaProps {
  tarefa: TarefaPayload;
}

export default function CardTarefa({ tarefa }: CardTarefaProps) {
  const navigate = useNavigate()
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
      <BtnEdit onClick={() => navigate('/edit/' + tarefa.id)}><BsPencil/></BtnEdit>
    </CardItem>
  );
}
