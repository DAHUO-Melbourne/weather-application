import {fromJS} from 'immutable';
import * as constants from './constants'

const defaultState=fromJS({
    city:'',
    weather:'',
    tempreture:'',
}) 

export default (state=defaultState, action)=>{
    switch (action.type){
        case 'WEATHER_INPUT_CHANGE':
            return state.set('city', action.data);
        case 'WEATHER_DATA_CHANGE':
            return state.merge({
                'weather': action.weather,
                'tempreture':action.tempreture
            });
        default:
            return state;
    }
}

