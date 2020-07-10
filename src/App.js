import React from 'react'
import './assets/style/style.css'
import Dashboard from './container/dashboard'
import Orders from './container/orders/index';
import Menu from './container/menu/index';
import {Switch, Route} from 'react-router-dom'

export default() => {
    return (
        <Switch>
            <Route path={"/orders"} exact component={Orders}/>
            <Route path={"/menu"} component={Menu}/>
            <Route path={"/"} component={Dashboard}/>
        </Switch>
    );
}