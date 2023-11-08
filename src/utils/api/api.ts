import axios from "axios"
import { CreateTarefa, DeletePayload, EditPayload, TarefaPayload } from "../types/request";

axios.defaults.baseURL = "https://api-todo-0j43.onrender.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const api = {

    postTask: async (data: CreateTarefa) => {
        try {
            const response = await axios.post("/to-do", data);
            return response.data;
        } catch (error) {
            alert(error);
        }
    },

    getAllTask: async () => {
        try {
            const response = await axios.get("/to-do");
            return response.data;
        } catch (error) {
            alert(error);
        }
    },

    getTaskById: async (data: TarefaPayload) => {
        try {
            const response = await axios.get("/to-do/" + data.id);
            return response.data;
        } catch (error) {
            alert(error);
        }
    },

    patchTask: async (data: EditPayload) => {
        try {
            const response = await axios.patch("/to-do/" + data.id, {
                id: data.id,
                name: data.name,
            });
            return response.data;
        } catch (error) {
            alert(error);
        }
    },

    deleteTask: async (data: DeletePayload) => {
        try {
            const response = await axios.delete("/to-do/" + data.id)
        } catch (error) {
            alert(error)
        }
    }
} 