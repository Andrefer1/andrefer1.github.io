import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './pages/Main/index'
import Portfolio from './pages/Portfolio/index'

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/portfolio' component={Portfolio} />
        </Switch>
    )
}

export default Routes