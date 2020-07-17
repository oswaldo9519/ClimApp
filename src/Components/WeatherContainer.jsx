import React from 'react';
import WeatherForm from './WeatherForm';

import '../Styles/WeatherApp.scss';

function WeatherContainer ({ getWeather }) {
    return (
        <div className='WeatherContentWrapper'>
            <div className='WeatherContent'>
                <WeatherForm getWeather={ getWeather } />
            </div>
        </div>
    )
}

export default WeatherContainer;