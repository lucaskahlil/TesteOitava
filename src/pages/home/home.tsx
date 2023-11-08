import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Title, HomePage } from "./style";
import { TarefaPayload } from "../../utils/types/request";
import CardTarefa from "../../components/CardTarefa/CardTarefa";
import AddTarefa from "../../components/AddTarefa/AddTarefa";
import { api } from "../../utils/api/api";

export default function Home() {
  const [task, setTask] = useState<TarefaPayload[]>([]);

  async function AllTask() {
    const result = await api.getAllTask()
    setTask(result)
  }

  useEffect(() => {
    AllTask();
  }, []);

  return (
    <HomePage>
      <Container>
        <AddTarefa />

        <Title>Lista de Tarefas</Title>

        {task.map((tarefa, index) => (
          <CardTarefa key={index} tarefa={tarefa} />
        ))}
      </Container>
    </HomePage>
  );
}
