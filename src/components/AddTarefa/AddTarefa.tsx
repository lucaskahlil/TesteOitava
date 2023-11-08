import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api/api";
import { ContainerAdd, FormAdd } from "./Style";

export default function AddTarefa() {
  const navigate = useNavigate();

  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTask = {
      name: e.currentTarget.nome.value,
    };

    const taskData = await api.postTask(newTask);

    window.location.reload();
  }

  return (
    <ContainerAdd>
      <FormAdd onSubmit={HandleSubmit}>
        <h1>Nova Tarefa</h1>
        <div>
          <input type="text" placeholder="Ex: Estudar programação" name="nome" />
          <button type="submit">Adicionar</button>
        </div>
      </FormAdd>
    </ContainerAdd>
  );
}
