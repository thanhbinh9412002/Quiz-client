import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:8081/api/v1"
})

export async function  createQuiz(quiz){
    try {
        let response = await api.post("/participant", quiz)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}