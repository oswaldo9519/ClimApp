import React from 'react';
import { useSelector } from 'react-redux';
import WeatherForm from './WeatherForm';

import '../Styles/WeatherApp.scss';

function WeatherContainer ({ getWeather }) {
    const { weatherInfo } = useSelector(state => state.front)
    console.log(weatherInfo)

    return (
        <div className='WeatherContentWrapper'>
            <div className='WeatherContent'>
                <WeatherForm getWeather={ getWeather } />
            </div>
        </div>
    )
}

export default WeatherContainer;