import React,{useState} from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import SectionOne from '../../components/addNewDish/addNewDish'
import Form from '../../components/editDishForm/editDishForm'

export default () => {
    return (
        <>
        <Header />
        <Navbar />
        <SectionOne />
        <Form />
        </>
    );
}