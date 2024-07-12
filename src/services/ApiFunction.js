import api from "../utils/axiosCustomize";


export async function  createQuiz(email, password, username, role, image){
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