import React from 'react'
import './assets/style/style.css'
import Dashboard from './container/dashboard'
import Orders from './container/orders/index';
import Menu from './container/menu/index';
import AddNewDish from './container/addNewDish/index';
import AddNewSideDish from './container/addNewSideDish/index';
import EditDish from './container/menuEditDish/index';
import DeleteDish from './container/deleteDishes/index';
import SideDish from './container/sideDish/index';
import Profile from './container/profile/index';
import Settings from './container/settings/index';
import SalesReport from './container/saleReport/index';
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
            <Route path={"/add-new-side-dish"} component={AddNewSideDish}/>
            <Route path={"/profile"} component={Profile}/>
            <Route path={"/settings"} component={Settings}/>
            <Route path={"/sales-report"} component={SalesReport}/>
            <Route path={"/"} component={Dashboard}/>
        </Switch>
    );
}