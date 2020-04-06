import React, {Component} from 'react';
import { connect } from 'react-redux';
import {WeatherTempretureWrapper, 
        WeatherRightContentWrapper, 
        Hr, 
        LogoWrapper, 
        WeatherRightCover, 
        WeatherWrapper, 
        WeatherLeftWrapper, 
        WeatherRightWrapper, 
        WeatherLeftHeading, 
        WeatherSearchInput, 
        WeatherSearchButton, 
        DataSubmissionButton,
        WeatherInputWrapper, 
        WeatherRightHeadingWrapper, 
        WeatherRightHeading, 
        WeatherDate,
        WeatherTempreture,
        WeatherLocation,
        WeatherMain} from './styled';
import axios from 'axios';
import {Link} from 'react-router-dom';
import * as moment from 'moment';

//const storage = window.sessionStorage;

class Weather extends Component {
    render(){
        const {city, weather, tempreture, permission, username} = this.props;
//        alert(storage.localUsername);
        return (
            <WeatherWrapper>
                <WeatherLeftWrapper>
                    <WeatherLeftHeading>SEARCH CITIES</WeatherLeftHeading>
                    <WeatherInputWrapper>
                    <WeatherSearchInput value={this.props.city} onChange={this.props.handleInputChange}></WeatherSearchInput>
                    <WeatherSearchButton onClick={this.props.getWeatherData.bind(this, city)}></WeatherSearchButton>
                    <DataSubmissionButton onClick={this.props.submitWeatherData.bind(this,city, weather, tempreture, permission, username)}>Submit the data</DataSubmissionButton>
                    <Link to={'/favourite'}><DataSubmissionButton>Favourites check</DataSubmissionButton></Link>
                    <div><Link to={'/'}><DataSubmissionButton onClick={this.props.logout}>log out</DataSubmissionButton></Link></div>
                    </WeatherInputWrapper>

                </WeatherLeftWrapper>
                <WeatherRightWrapper>
                    <WeatherRightCover>
                    <WeatherRightHeadingWrapper>
                        <WeatherRightHeading>CITY OF THE SEARCH</WeatherRightHeading>
                        <Hr></Hr>
                        <WeatherDate>{moment().format('MMMM Do YYYY')}</WeatherDate>
                    </WeatherRightHeadingWrapper>
                    <WeatherRightContentWrapper>
                        <LogoWrapper>
                            <svg _ngcontent-fcm-c1="" viewBox="2436.9 -843.1 275.5 274.1">
                                <g _ngcontent-fcm-c1="" data-name="cloudy icon" transform="translate(84 790)">
                                    <circle _ngcontent-fcm-c1="" cx="137" cy="137" data-name="Ellipse 23" fill="#fff" r="137" transform="translate(2354 -1633)">
                                    </circle>
                                    <path _ngcontent-fcm-c1="" d="M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z" data-name="Subtraction 1" fill="#ffde17">
                                    </path>
                                </g>
                            </svg>
                        </LogoWrapper>
                        <WeatherTempretureWrapper>
                            <WeatherTempreture>{tempreture}°C</WeatherTempreture>
                            <WeatherLocation>{city}</WeatherLocation>
                            <WeatherMain>{weather}</WeatherMain>
                        </WeatherTempretureWrapper>
                    </WeatherRightContentWrapper>
                    </WeatherRightCover>
                </WeatherRightWrapper>
            </WeatherWrapper>
        )
    }
}

const mapState=(state)=>({
    city:state.getIn(['Weather', 'city']),
    weather:state.getIn(['Weather', 'weather']),
    tempreture:state.getIn(['Weather', 'tempreture']),
    permission:state.getIn(['Login','permission']),
    username: state.getIn(['Login', 'username']),
});

const mapDispatch=(dispatch)=>{
    return{
        handleInputChange(e){
            const action={
                type:'WEATHER_INPUT_CHANGE',
                data: e.target.value
            }
            dispatch(action);
        },

        async getWeatherData(city){
            try{
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?APPID=eeafa45a1d53ce4cf30b841805c81737&q=${city}`);
                const myJson= await response.json();
                const weather = myJson.weather[0].main;
                const tempreture = Math.ceil(myJson.main.temp-273.15);
                const action = {
                    type:'WEATHER_DATA_CHANGE',
                    weather: weather,
                    tempreture:tempreture,
                }
                dispatch(action);
            } catch(error){
                alert('Could not find the city in Information Base, please re-input correct city name')
            }
        },

        submitWeatherData(city, weather, tempreture, permission, username){
            if(permission==='Admin'){
                axios.post('https://radiant-thicket-19584.herokuapp.com/weatherdata/add',{
                    city:city,
                    weather:weather,
                    tempreture:tempreture,
                    username: username
                })
                .then(res=>console.log(res.data));
            }
            else
                alert('You do not have permission');
        },

        logout(){
            const action = {
                type:'LOG_OUT',
                value:''
            }
            dispatch(action);
        }
    }
}

export default connect(mapState, mapDispatch)(Weather);