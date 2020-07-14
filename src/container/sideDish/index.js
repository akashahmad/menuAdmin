import React from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import  Sidedish from '../../components/sideDish/sideDish'
import { useHistory } from "react-router-dom";
export default () => {
    let history = useHistory();
    return (
        <div>
            <Header />
            <Navbar />
            <Sidedish history={history}/>
        </div>
    );
}