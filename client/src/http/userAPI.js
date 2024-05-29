import {$authHost, $host} from "./index";
import {jwtDecode as jwt_decode} from 'jwt-decode';


export const registration = async (name, birthday, photo, email, password) => {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('birthday', birthday);
    formData.append('photo', photo);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('role', 'USER');  

    const {data} = await $host.post('api/user/registration', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

export const login = async (email, password) => {
    try {
        const {data} = await $host.post('api/user/login', {email, password});
        localStorage.setItem('token', data.token);
        return jwt_decode(data.token);  
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const updateProfile = async (userID, updatedUser) => {
    try {
        const token = localStorage.getItem('token'); // Получаем токен из localStorage
        const { data } = await $authHost.put(`api/user/${userID}`, updatedUser, {
            headers: {
                Authorization: `Bearer ${token}` // Добавляем заголовок авторизации
            }
        });
        return data;
    } catch (error) {
        console.error("Update profile error:", error);
        throw error;
    }
};