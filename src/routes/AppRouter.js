import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import DashboardPage from '../components/DashboardPage'

export let history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
        <Switch>
            <Route path="/" component={DashboardPage} exact={true}/>
        </Switch>
      </div>
    </Router>
)

export default AppRouter