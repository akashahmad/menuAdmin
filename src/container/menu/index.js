import React, {useState} from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import SectionOne from '../../components/menuSectionOne/menuSectionOne'
import SectionTwo from '../../components/menuSectionTwo/menuSectionTwo'
import AddNewMenu from '../../components/addNewMenu/addNewMenu'
import AddNewCategory from '../../components/addNewCategory/addNewCategory'

export default () => {
    const [addNewMenuPopUp, setAddNewMenuPopUp] = useState(false);
    const [addNewCategoryPopUp, setAddNewCategoryPopUp] = useState(false);
    return (
        <div>
            {addNewMenuPopUp ? <AddNewMenu setAddNewMenuPopUp={setAddNewMenuPopUp}/> : ""}
            {addNewCategoryPopUp ? <AddNewCategory setAddNewCategoryPopUp={setAddNewCategoryPopUp}/> : ""}
            <Header />
            <Navbar />
            <SectionOne setAddNewMenuPopUp={setAddNewMenuPopUp} setAddNewCategoryPopUp={setAddNewCategoryPopUp}/>
            <SectionTwo />
        </div>
    );
}