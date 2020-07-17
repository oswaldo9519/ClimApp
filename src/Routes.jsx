import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WeatherApp from './Components/WeatherApp'

function Routes () {
    return (
        <div>
            <Switch>
                {/*<Route exact path='/quienessomos' component={} />*/}
                <Route exact path='/weatherhome' component={WeatherApp} />
            </Switch>
        </div>
    )
}

export default Routes;