import React from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import Order from '../../components/order/order'
import { useLocation } from 'react-router-dom';
export default () => {
    let location=useLocation();
    return (
        <div className="background-color-grey">
            <Header />
            <Navbar location={location}/>
            <Order />
        </div>
    );
}