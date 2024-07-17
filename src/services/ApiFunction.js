import { GiAllSeeingEye } from "react-icons/gi";
import api from "../utils/axiosCustomize";

export async function  postCreateUser(email, password, username, role, image){
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('username', username);
        data.append('role', role);
        data.append('userImage', image);
        return api.post("api/v1/participant", data)
}

export async function getAllUsers(){
    return api.get("api/v1/participant/all")
}

export async function  putUpdateUser(id, username, role, image){
        const data = new FormData();
        data.append('id', id);
        data.append('username', username);
        data.append('role', role);
        data.append('userImage', image);
        return api.put("api/v1/participant", data)
}

export async function deleteUser(userId){
    return api.delete("api/v1/participant", {data: {id: userId}});
}

export async function getUserWithPaginate(page, limit){
    return api.get(`api/v1/participant?page=${page}&limit=${limit}`);
}

export async function postLogin(email, password){
    return api.post(`/api/v1/login`, {email, password, delay:5000})
}

export async function logout(email, refresh_token){
    return api.get(`/api/v1/logout`,{email, refresh_token})
}

export async function postRegister(email, password, username){
    return api.post(`/api/v1/login`, {email, password, username})
}

export async function getQuizByUser(){
    return api.get(`/api/v1/quiz-by-participant`)
}

export async function getDataQuiz(id){
    return api.get(`/api/v1/questions-by-quiz?quizId=${id}`)
}

export async function postSubmitQuiz(data){
    return api.post(`/api/v1/quiz-submit`,{...data})
}

export async function postCreateNewQuiz(description, name, difficulty, image){
    const data = new FormData();
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', difficulty);
    data.append('quizImage', image);
    return api.post("/api/v1/quiz", data)
}