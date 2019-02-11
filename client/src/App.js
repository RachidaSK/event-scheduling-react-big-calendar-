import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Homepage from './pages/calendar'
import Eventpage from './pages/event';
import Error from './pages/error';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/event' component={Eventpage} />
        <Route component={Error}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;