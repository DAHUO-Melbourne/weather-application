import { fromJS, List } from 'immutable';
import * as constants from 'constants'

const defaultState = fromJS({
    favourites: List(),
    cityName: '',
    weather: '',
    tempreture: ''
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_FAVOURITES_LIST':
            return state.set('favourites', action.data)
        default:
            return state;
    }
}