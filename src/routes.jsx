import React from 'react'
import { Switch, Route } from 'react-router'
import HomePage from './Components/HomePage'



export default (

  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route  path='/userDashboard' component={HomePage} />


  </Switch>
)