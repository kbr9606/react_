import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../_actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER :
            return {...state, loginSuccess : action.payload}
            break;

        case REGISTER_USER :
            return {...state, registerSuccess : action.payload}
            break;

        case AUTH_USER :
            return {...state, userData : action.payload}    // auth가 response하는 것 : userData json파일, 이걸 받아서 state에 변경 (새로 만듬)
            break;
        default :
            return state;

        
    }
}