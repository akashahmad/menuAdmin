import React,{useState} from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import Section1 from '../../components/settingsSectionOne/settingsSectionOne'
import AddNewUserPopUp from '../../components/addNewUserPopUp/addNewUserPopUp'
import DelPopUp from '../../components/deletePopUp/deleterPopUp'
export default () => {
    const [addNewUserPopUp,setAddNewUserPopUp]=useState(false);
    const [delPopUp,setDelPopUp]=useState(false);
    return (
        <>
        {addNewUserPopUp && <AddNewUserPopUp setAddNewUserPopUp={setAddNewUserPopUp}/>}
        {delPopUp && <DelPopUp setDelPopUp={setDelPopUp}/>}
        <Header />
        <Navbar />
        <Section1 setAddNewUserPopUp={setAddNewUserPopUp} setDelPopUp={setDelPopUp} />
        </>
    );
}