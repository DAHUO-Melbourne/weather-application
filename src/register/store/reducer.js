import {fromJS, List} from 'immutable';
import * as constants from 'constants'

const defaultState=fromJS({
    username:'',
    password:'',
    userInfoList:List(),
}) 

export default (state=defaultState, action)=>{
    switch (action.type){
        case 'CHANGE_REGISTER_USERNAME':
                return state.set('username',action.value);
        case 'CHANGE_REGISTER_PASSWORD':
                return state.set('password',action.value);
        case 'ADD_USER_INFO_LIST':
                const userItem={
                    username:action.username,
                    password:action.password
                }
                const NewList=state.get('userInfoList');
                return state.merge({
                    'userInfoList': NewList.push(userItem),
                    'username':'',
                    'password':'',
                });
                
        default:
            return state;
    }
}

