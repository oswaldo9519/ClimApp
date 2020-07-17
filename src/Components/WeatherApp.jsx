import React, { useState } from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherContainer from './WeatherContainer';

import '../Styles/WeatherApp.scss';
const [ info, setInfo ] = useState({
    temperatura: '',
    descripcion: '',
    humedad: '',
    velocidad_viento: '',
    ciudad: '',
    pais: '',
    error: null
})

console.log(info)

let getWeather = async e => {
    e.preventDefault()
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;
    const API_KEY = 'eaa3d6d89c8b2d5ef5c7703276f29570';
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${API_KEY}&units=metric`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);

    setInfo(data)
}

function WeatherApp() {
    return(  
        <div className='contentWrapper'>
            <WeatherHeader />
            <WeatherContainer getWeather = { getWeather } />
        </div>
    )
};

export default WeatherApp;