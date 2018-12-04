import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import Profile from "../components/Profile";
import People from "../components/People"
const routes = (
    <div>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/people" component={People} />
        </Switch>
    </div>
)

export default routes