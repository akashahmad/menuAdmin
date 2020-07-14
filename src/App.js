import React from 'react'
import './assets/style/style.css'
import Dashboard from './container/dashboard'
import Orders from './container/orders/index';
import Menu from './container/menu/index';
import AddNewDish from './container/addNewDish/index';
import EditDish from './container/menuEditDish/index';
import DeleteDish from './container/deleteDishes/index';
import SideDish from './container/sideDish/index';
import {Switch, Route} from 'react-router-dom'

export default() => {
    return (
        <Switch>
           <Route path={"/orders"} exact component={Orders}/>
            <Route path={"/menu"} component={Menu}/>
            <Route path={"/add-new-dish"} component={AddNewDish}/>
            <Route path={"/menu-edit-dish"} component={EditDish}/>
            <Route path={"/delete-dishes"} component={DeleteDish}/>
            <Route path={"/side-dish"} component={SideDish}/>
            <Route path={"/"} component={Dashboard}/>
        </Switch>
    );
}