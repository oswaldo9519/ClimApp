import React from 'react';

import '../Styles/WeatherApp.scss';

function WeatherForm ({ getWeather }) {

    return (
        <form className='formWrapper' onSubmit={getWeather}>
            <input type="text" name='city' placeholder='Insert City Name'
                className='inputForm' autoFocus />
            <input type="text" name='country' placeholder='Insert Country Name'
                className='inputForm' />
            <button className='btnForm'>
                Consultar Clima
            </button>
        </form>
    )
}

export default WeatherForm;