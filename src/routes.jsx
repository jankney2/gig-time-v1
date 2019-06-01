import React from 'react'
import {Switch, Route, HashRouter} from 'react-router'
import Root from './Components/Root'

export default (
  <Switch>

  <Route exact path='/' component={Root} />


  </Switch>
)