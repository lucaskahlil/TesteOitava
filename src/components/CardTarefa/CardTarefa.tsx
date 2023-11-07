import React from 'react'
import { useState } from 'react'
import { TarefaPayload } from '../../utils/types/request'

interface CardTarefaProps {
  tarefa: TarefaPayload
}

export default function CardTarefa({ tarefa }: CardTarefaProps) {
  const [isCheck, setIsCheck] = useState(tarefa.done);


  return (
    <div>
      <input 
        type="checkbox" 
        checked={isCheck}
        onChange={e => setIsCheck(e.target.checked)}
      />
      <h2>{tarefa.name}</h2>
      <button>Editar</button>
    </div>
  )
}
