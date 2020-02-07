import { fromJS, List } from 'immutable';
import * as constants from 'constants'

const defaultState = fromJS({
    favourites: List()
})

export default (state = defaultState, action) => {
//    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'CHANGE_FAVOURITES_LIST':
            return state.set('favourites', action.data);

//            newState.favourites = action.data
//            return newState;
        case 'CHANGE_FAVOURITE_LIST_AFTER_DELETE':
            return state.set('favourites', state.get('favourites').filter(o => o._id !== action.data));
        case 'FAVOURITE_WEATHER_UPDATES':
//            newState.favourites = action.data
//            return newState;
            return state.set('favourites', action.data);
        default:
            return state;
    }
}