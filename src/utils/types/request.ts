export type TarefaPayload = {
    id: string
    name: string
    done: boolean
}

export type CreateTarefa= {
    name: string
}

export type EditPayload = {
    id: string
    name: string
}

export type DeletePayload = {
    id: string
}