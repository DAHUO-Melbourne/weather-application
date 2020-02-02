import { combineReducers } from 'redux-immutable'
import { reducer as LoginReducer } from '../login/store'
import { reducer as RegisterReducer } from '../register/store'
import { reducer as WeatherReducer } from '../WeatherDisplay/store'
import { reducer as FavouriteReducer } from '../favourite/store';


export default combineReducers({
    Login: LoginReducer,
    Register: RegisterReducer,
    Weather: WeatherReducer,
    Favourite: FavouriteReducer
})