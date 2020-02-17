import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Landing from './containers/Landing'
import Dashboard from './containers/Dashboard'
import NewApiBoard from './containers/NewApiBoard'
import HeaderWrapper from './components/HeaderWrapper'

function DashboardRouter() {
  return (
    <div>
      <HeaderWrapper />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/api" component={NewApiBoard} />
      </Switch>
    </div>
  )
}

function MainRouter() {
  return (
    <Switch>
      <Route exact path="/landing" component={Landing} />
      <Route path="/" component={DashboardRouter} />
    </Switch>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" component={MainRouter} />
      </Switch>
    </Router>
  )
}

export default App
