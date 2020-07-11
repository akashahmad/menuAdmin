import React from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import SectionOne from '../../components/addNewDish/addNewDish'
import Form from '../../components/addNewDishForm/addNewDishForm'

export default () => {
    return (
        <>
            <Header />
            <Navbar />
            <SectionOne/>
            <Form/>
        </>
    );
}