import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import WeatherHeader from './WeatherHeader';
import WeatherContainer from './WeatherContainer';

import '../Styles/WeatherApp.scss';


function WeatherApp() {
    const dispatch = useDispatch();

    let getWeather = async e => {
        e.preventDefault()
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;
        const API_KEY = 'eaa3d6d89c8b2d5ef5c7703276f29570';
        const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${API_KEY}&units=metric`;
        const response = await fetch(API_URL);
        const data = await response.json();
        try { 
            if (data.main.temp) { 
                /*alert(
                `Clima en ${data.name}, ${data.sys.country} / temperatura: ${data.main.temp}°C / humedad: ${data.main.humidity}% / Viento: ${data.wind.speed}KPH`
                )*/
                dispatch({ type: 'SET_WEATHER_INFO', payload: data})
            }
        } catch (error) {
            alert('Debes ingresar Ciudad y País')
        }
    }


    return(  
        <div className='contentWrapper'>
            <WeatherHeader />
            <WeatherContainer getWeather = { getWeather } />
        </div>
    )
};

export default WeatherApp;