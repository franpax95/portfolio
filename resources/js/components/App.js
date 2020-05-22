import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Context from './Context';

import Navbar from './Navbar';
import Header from './Header';
import NotFound from './NotFound';

import Home from '../pages/Home/index';
import Projects from '../pages/Projects/index';

import './App.css';


const App = () => (
    <React.Fragment>
        <Header />

        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/projects' component={Projects} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>

    </React.Fragment>
    
);

export default App;


if (document.getElementById('app'))
    ReactDOM.render(
        <Context.Provider>
            <App />
        </Context.Provider>,
        document.getElementById('app')
    );

