import React from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherContainer from './WeatherContainer'
import '../Styles/WeatherApp.scss'

function WeatherApp() {
    return(  
        <div className='contentWrapper'>
            <WeatherHeader />
            <WeatherContainer />
        </div>
    )
};

export default WeatherApp;