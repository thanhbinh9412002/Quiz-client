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
    return api.post(`/api/v1/login`, {email, password})
}