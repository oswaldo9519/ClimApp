import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

import '../Styles/WeatherApp.scss';

function WeatherForm ({ getWeather }) {

    return (
        <form className='formWrapper' onSubmit={getWeather}>
            <div className='formTitle'>
                <FontAwesomeIcon icon={faCloudSun} />
                <div className='titleWeatherApp'>Buscar por región:</div>
            </div>
            <input type="text" name='city' placeholder='Inserta Ciudad...'
                className='inputForm' autoFocus required/>
            <input type="text" name='country' placeholder='Inserta País...'
                className='inputForm' required/>
            <button className='btnForm'>
                Consultar Clima
            </button>
        </form>
    )
}

export default WeatherForm;