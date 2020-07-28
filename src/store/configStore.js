import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

//const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSIONCOMPOSE_ || compose;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
    
export default store
