import {$authHost, $host} from "./index";
import {jwtDecode as jwt_decode} from 'jwt-decode';


export const registration = async (name, email, password) => {
    const {data} = await $host.post('api/user/registration', {name, email, password, role: 'ADMIN'});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
    // const response = await $host.post('api/user/registration', {name, email, password, role: 'ADMIN'})
    // return response
}

export const login = async (email, password) => {
  try {
        const {data} = await $host.post('api/user/login', {email, password});
        localStorage.setItem('token', data.token);
        return jwt_decode(data.token);
        
    } catch (error) {
        console.error("Login error:", error);
        // Обработка ошибок, например, вывод сообщения пользователю
        throw error;
    }
    // const {data} = await $host.post('api/user/login', {email, password})
    // localStorage.setItem('token', data.token)
    // return jwt_decode(data.token)


    // const response = await $host.post('api/user/login', {email, password})
    // return response
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
    // const response = await $authHost.get('api/user/auth' )
    // return response
}
