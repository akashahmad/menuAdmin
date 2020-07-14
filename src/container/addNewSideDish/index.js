import React from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import  AddNewSideDish from '../../components/addNewSideDish/addNewSideDish'
export default () => {
    return (
        <div>
            <Header />
            <Navbar />
            <AddNewSideDish/>
        </div>
    );
}