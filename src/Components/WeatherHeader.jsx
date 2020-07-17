import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import '../Styles/WeatherApp.scss'

function WeatherHeader () {
    return(
        <div className='headerWrapper'>
            <div className='headerContent'>
                <div className='titleHeader'>ClimApp</div>
                <a  
                    target='_blank' 
                    href='https://github.com/oswaldo9519' 
                    className="iconHeader"
                >
                        <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </div>
    )
};

export default WeatherHeader;