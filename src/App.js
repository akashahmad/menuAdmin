import React from 'react'
import './assets/style/style.css'
import Dashboard from './container/dashboard'
import Orders from './container/orders/index';
import Menu from './container/menu/index';
import AddNewDish from './container/addNewDish/index';
import {Switch, Route} from 'react-router-dom'

export default() => {
    return (
        <Switch>
           <Route path={"/orders"} exact component={Orders}/>
            <Route path={"/menu"} component={Menu}/>
            <Route path={"/add-new-dish"} component={AddNewDish}/>
            <Route path={"/"} component={Dashboard}/>
        </Switch>
    );
}