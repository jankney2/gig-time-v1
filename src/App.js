import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import routes from './routes'

function App() {
  return (

<HashRouter>
{routes}
    </HashRouter>

  );
}

export default App;
