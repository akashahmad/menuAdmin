import React, {useState} from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import Section1 from '../../components/settingsSectionOne/settingsSectionOne'
import AddNewUserPopUp from '../../components/addNewUserPopUp/addNewUserPopUp'
import DelPopUp from '../../components/deletePopUp/deleterPopUp'
import VarificationPopUp from '../../components/emailVarification/emailVarification'
import VarificationCopyPopUp from '../../components/emailVarificationcopy/emailVarificationcopy'
export default () => {
    const [addNewUserPopUp, setAddNewUserPopUp] = useState(false);
    const [varificationPopUp, setVarificationPopUp] = useState(false);
    const [varificationCopyPopUp, setVarificationCopyPopUp] = useState(false);
    const [delPopUp, setDelPopUp] = useState(false);
    return (
        <>
        {addNewUserPopUp && <AddNewUserPopUp setAddNewUserPopUp={setAddNewUserPopUp}
                                             setVarificationPopUp={setVarificationPopUp}
        />}
        {varificationPopUp && <VarificationPopUp setVarificationPopUp={setVarificationPopUp}
                                                 setVarificationCopyPopUp={setVarificationCopyPopUp}
        />}
        {varificationCopyPopUp && <VarificationCopyPopUp setVarificationCopyPopUp={setVarificationCopyPopUp}/>}
        {delPopUp && <DelPopUp setDelPopUp={setDelPopUp}/>}
        <Header />
        <Navbar />
        <Section1 setAddNewUserPopUp={setAddNewUserPopUp} setDelPopUp={setDelPopUp}/>
        </>
    );
}