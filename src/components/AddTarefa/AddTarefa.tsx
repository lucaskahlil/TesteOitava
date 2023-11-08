import React, { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api/api';

export default function AddTarefa() {
  const navigate = useNavigate()

  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTask = {
      name: e.currentTarget.nome.value
    };

    const taskData = await api.postTask(newTask);

    window.location.reload();
  }

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <h1>Nova Tarefa</h1>
        <input
          type="text"
          placeholder='Ex: Varrer a casa'
          name='nome' 
        />
        <button type='submit'>Adicionar</button>
      </form>
    </div>
  )
}
