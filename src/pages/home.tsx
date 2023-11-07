import React from "react";
import { useState } from "react";
import { Container, Title, HomePage } from "./style";
import { TarefaPayload } from "../utils/types/request";
import CardTarefa from "../components/CardTarefa/CardTarefa";
import AddTarefa from "../components/AddTarefa/AddTarefa";

export default function Home() {
  const [list, setList] = useState<TarefaPayload[]>([
    { id: "1", name: "Exemplo 1", done: false },
    { id: "2", name: "Exemplo 2", done: false },
    { id: "3", name: "Exemplo 3", done: false }
  ]);

  return (
    <HomePage>
      <Container>
        <AddTarefa />

        <Title>Lista de Tarefas</Title>

        {list.map((tarefa, index) => (
          <CardTarefa key={index} tarefa={tarefa} />
        ))}
      </Container>
    </HomePage>
  );
}
