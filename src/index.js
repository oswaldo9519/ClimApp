import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import WeatherApp from './Components/WeatherApp';
import { BrowserRouter } from 'react-router-dom';
import store from './store/configStore';
import Routes from './Routes';

const Application = () => {
  return (
    <Provider store={store} >
      <BrowserRouter >
        <Routes />
      </BrowserRouter>
    </ Provider>
  )
}

ReactDOM.render( <Application />, document.getElementById('root'));