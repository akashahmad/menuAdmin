import React from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import SectionOne from '../../components/menuSectionOne/menuSectionOne'
import SectionTwo from '../../components/menuSectionTwo/menuSectionTwo'

export default () => {
    return (
        <div>
            <Header />
            <Navbar />
            <SectionOne/>
            <SectionTwo/>
        </div>
    );
}