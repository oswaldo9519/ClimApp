import React from 'react';
import '../Styles/WeatherApp.scss'

function WeatherHeader () {
    return(
        <div className='headerWrapper'>
            <div className='headerContent-1'>
                <div className='titleHeader'>Inicio</div>
                <div className='titleHeader'>¿Quienes Somos?</div>
                <div className='titleHeader'>Contacto</div>
                <div className='titleHeader'>Misión</div>
            </div>
            <div className='headerContent-2'>
                <div className='titleHeader'>Registrarse</div>
            </div>
        </div>
    )
};

export default WeatherHeader;