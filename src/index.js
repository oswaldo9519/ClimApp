import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import WeatherApp from './Components/WeatherApp';
//import { Route, Router } from 'react-router-dom';
//import Routes from './Routes'

/*const Application = () => {
  return (
    <Provider>
      <Router>
        <Routes />
      </Router>
    </Provider>
  )
}*/

ReactDOM.render( <WeatherApp />, document.getElementById('root'));
