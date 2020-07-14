/**
 * Created by Hajira Razzaq on 7/15/2020.
 */
import React,{useState} from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import SalesReports from '../../components/SalesReports/SalesReports'

export default () => {
    return (
        <>
        <Header />
        <Navbar />
        <SalesReports />
        </>
    );
}