import React, { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../utils/api/api";
import { EditContainer, FormEdit } from "./style";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const editPayload = {
      id: id ?? "",
      name: e.currentTarget.nome.value,
    };

    const editTask = await api.patchTask(editPayload);

    navigate("/");
  }

  async function handleDelete() {
    const deletePayload = {
      id: id ?? "",
      name: "",
      done: "",
    };

    const userData = await api.deleteTask(deletePayload);

    navigate("/");
  }

  return (
    <EditContainer>
      <div>
        <FormEdit onSubmit={HandleSubmit}>
          <h2>Editar Tarefa</h2>
          <input type="text" name="nome" />
          <div>
            <button type="submit">Editar</button>
            <button type="button" onClick={handleDelete}>
              Deletar
            </button>
          </div>
        </FormEdit>
      </div>
    </EditContainer>
  );
}
