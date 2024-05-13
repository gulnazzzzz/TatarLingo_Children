import {$authHost, $host} from "./index";
import {jwtDecode as jwt_decode} from 'jwt-decode';


export const registration = async (name, birthday, photo, email, password) => {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('birthday', birthday);
    formData.append('photo', photo);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('role', 'USER');  // Если роль всегда USER при регистрации

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
        return jwt_decode(data.token);  // This decodes the token and returns user data
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};
    // const {data} = await $host.post('api/user/login', {email, password})
    // localStorage.setItem('token', data.token)
    // return jwt_decode(data.token)


    // const response = await $host.post('api/user/login', {email, password})
    // return response
// }

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
    // const response = await $authHost.get('api/user/auth' )
    // return response
}
