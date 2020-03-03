import {fromJS} from 'immutable';
import * as constants from 'constants'

let username = sessionStorage.getItem('username')?sessionStorage.getItem('username'):'';
let permission = sessionStorage.getItem('permission')?sessionStorage.getItem('permission'):'';

const defaultState=fromJS({
    username,
    password:'',
    permission
}) 

export default (state=defaultState, action)=>{
    switch (action.type){
        case 'CHANGE_LOGIN_USERNAME':
            sessionStorage.setItem('username', action.value);
            return state.set('username',action.value);
        case 'CHANGE_LOGIN_PASSWORD':
            return state.set('password',action.value);
        case 'LOG_USER_PERMISSION':
            sessionStorage.setItem('permission', action.value);
            return state.set('permission',action.value);
        case 'LOG_OUT':
            sessionStorage.setItem('username', action.value);
            return state.merge({'username': action.value,
                                'password':action.value});
        default:
            return state;
    }
}

