import {fromJS} from 'immutable';
import * as constants from 'constants'

const defaultState=fromJS({
    username:'',
    password:'',
}) 

export default (state=defaultState, action)=>{
    switch (action.type){
        case 'CHANGE_LOGIN_USERNAME':
            return state.set('username',action.value);
        case 'CHANGE_LOGIN_PASSWORD':
            return state.set('password',action.value);
        default:
            return state;
    }
}

