import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER
} from './types';

export function loginUser(dataToSubmit) {
    
    const request = axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data) //server에서 받은 response가 request에 저장 됨...

    // retrun이 reducer로 감 !
    // Action은 { type : 'ADD_TODO', text : 'Study Hard.' } 와 같이 reduce에 넘김
    return {
        type: LOGIN_USER,
        payload: request // payload이름은 짓기 나름.. 여기서는 user정보
    }
}

export function registUser(dataToSubmit) {
    
    const request = axios.post('/api/users/register', dataToSubmit)
    .then(response => response.data)
    return {
        type: REGISTER_USER,
        payload: request
    }
}