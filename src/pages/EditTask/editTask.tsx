import React, { FormEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../utils/api/api';

export default function EditTask() {

  const { id } = useParams();
  const navigate = useNavigate()

  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const editPayload = {
      id: id ?? "",
      name: e.currentTarget.nome.value,
    }

    const editTask = await api.patchTask(editPayload)

    navigate('/')
  }

  async function handleDelete() {

    const deletePayload = {
        id: id ?? "",
        name: "",
        done: "",
    };

    const userData = await api.deleteTask(deletePayload);

    navigate('/')
  }

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <h2>Editar Tarefa</h2>
        <input type="text" name='nome'/>
        <button type='submit'>Editar</button>
        <button type='button' onClick={handleDelete}>Deletar</button>
      </form>
    </div>
  )
}
