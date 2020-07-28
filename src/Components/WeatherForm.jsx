import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

import '../Styles/WeatherApp.scss';

function WeatherForm ({ getWeather }) {
    const { weatherInfo } = useSelector(state => state.front)
    console.log(weatherInfo)

    return (
            <form className='formWrapper' onSubmit={getWeather}>
                <div className='formulario'>
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
                </div>
                { weatherInfo ? 
                    <div className='general_info'>
                        <div>
                            <div> 
                                <b className='margin-r5'>Localización:</b>
                                    { weatherInfo ? weatherInfo.name : '' },
                                    { weatherInfo ? weatherInfo.sys.country : '' }
                            </div>
                            <div> 
                                <b className='margin-r5'>Temperatura:</b>
                                    { weatherInfo ? weatherInfo.main.temp + '°C' : '' }
                            </div>
                            <div> 
                                <b className='margin-r5'>Húmedad:</b>
                                    { weatherInfo ? weatherInfo.main.humidity + '%' : '' }
                            </div>
                            <div> 
                                <b className='margin-r5'>Viento:</b>
                                    { weatherInfo ? weatherInfo.wind.speed + 'KPH' : '' }
                            </div>
                        </div>
                    </div>
                    :
                    <div className='pAbsolute'> </div>
                }   
            </form>
    )
}

export default WeatherForm;