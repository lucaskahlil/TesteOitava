import axios from "axios"
import { CreateTarefa, TarefaPayload } from "../types/request";

axios.defaults.baseURL = "https://api-todo-0j43.onrender.com/to-do";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const api = {

    postTask: async (data: CreateTarefa) => {
        try {
            const response = await axios.post("/", data);
            return response.data;
        } catch (error) {
            alert(error);
        }
    },

    getAllTask: async () => {
        try {
            const response = await axios.get("/");
            return response.data;
        } catch (error) {
            alert(error);
        }
    },

    getTaskById: async (data: TarefaPayload) => {
        try {
            const response = await axios.get("/" + data.id);
            return response.data;
        } catch (error) {
            alert(error);
        }
    },

    patchTask: async (data: TarefaPayload) => {
        try {
            const response = await axios.patch("/" + data.id, {
                id: data.id,
                name: data.name,
                done: data.done
            });
            return response.data;
        } catch (error) {
            alert(error);
        }
    },

    deleteTask: async (id: string) => {
        try {
            const response = await axios.delete("/" + id)
        } catch (error) {
            alert(error)
        }
    }
} 