import React from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import Order from '../../components/order/order'

export default () => {
    return (
        <div className="background-color-grey">
            <Header />
            <Navbar />
            <Order />
        </div>
    );
}