import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';
import reduxThunk from 'redux-thunk';

import Navbar from './General/Navbar';
import Header from './General/Header';
import Index from './General/Index';
import Projects from './Projects';
import NotFound from './util/NotFound';

import './App.css';


const App = () => (
    <BrowserRouter>
        <Navbar />
        <Header />
        <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/projects' component={Projects} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App;



const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
);

if (document.getElementById('app')){
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('app')
    );
}
