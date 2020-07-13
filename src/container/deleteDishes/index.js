import React from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import  Deletedishes from '../../components/deleteDishes/deleteDishes'
export default () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Deletedishes/>

        </div>
    );
}