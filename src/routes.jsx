import React from 'react'
import { Switch, Route } from 'react-router'
import HomePage from './Components/HomePage'
import UserHome from './Components/UserHome'


export default (

  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route  path='/userDashboard' component={UserHome} />


  </Switch>
)