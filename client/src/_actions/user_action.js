import Axios from 'axios';
import {LOGIN_USER, REGISTER_USER, AUTH_USER, MEMO_TEXT, MEMO_TITLE} from './types'

export function loginUser(dataToSubmit) {
    
    const request = Axios.post("/api/users/login", dataToSubmit)
    .then(response => response.data)

    return {
        type : LOGIN_USER,
        payload : request
    }
}

export function registerUser(dataToSubmit) {
    
    const request = Axios.post('/api/users/register', dataToSubmit)
    .then(response => response.data)

    return {
        type : REGISTER_USER,
        payload : request
    }
}

export function auth() {

    const request = Axios.get('/api/users/auth')    // get은 body가 필요 없음

    return {
        type : AUTH_USER,
        payload : request
    }
}

export function memoText(dataToSubmit) {
    
    const request = Axios.post('/folder/memo', dataToSubmit)
    .then(response => response.data)

    return {
        type : MEMO_TEXT,
        payload : request
    }
}

export function memoTitle(dataToSubmit) {
    
    const request = Axios.post('/folder/memo', dataToSubmit)
    .then(response => response.data)

    return {
        type : MEMO_TITLE,
        payload : request
    }
}