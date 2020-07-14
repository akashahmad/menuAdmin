import React, {useState} from 'react'
import './style.css'
//import components

//import images
import Searchimage from '../../assets/images/search.png'
import MenuImage from '../../assets/images/menuImg.png'
import EditIcon from '../../assets/images/edit-btn-icon.png'

export default (props) => {
    let {
        history
    } = props;

    return (
        <>
        <div className="container-fluid addNewDish-section-one">
            <div className="addNewDish-container-head margin-top-bottom-30">
                <div
                    className="p-t-10 addNewDish-container-left heading-clr f-fm-OpenSans f-s-24 f-w-600 f-w-str-normal f-sty-normal letter-spc-normal">
                    Side Dishes
                </div>
                <div className="d-flex">
                    <div className="search-main-div">
                        <input className="side-dish-seach-box menu-search-box  margin-top-10" type="text"
                               placeholder="Search.."/>
                        <div className="menu-search-icon margin-top-20"><img src={Searchimage} alt="search-icon"/></div>
                    </div>
                    <button onClick={() => history.push("/add-new-side-dish")}
                            className="bg-clr-Orange side-dish-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                        Add New Side Dish
                    </button>
                    <button
                        className=" side-dish-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                        Delete Side Dish
                    </button>
                </div>
            </div>
        </div>


        <div className="container side-dish-cards">
            <div className="side-dish-block-width categories-wide-block bg-clr-white">
                <div style={{backgroundImage: `url(${MenuImage})`}} className="wide-card-image"/>
                <div className="margin-0 wide-card-sibling-div">
                    <p className="wide-card-heading f-fm-OpenSans">Creamy Tomato Pasta</p>
                    <p className="p-r-10 wide-card-description f-w-nomal f-sty-normal f-w-str-normal line-h-normal letter-spc-normal f-fm-OpenSans">
                        Pink pasta! Spaghetti tossed with a creamy tomato…
                    </p>
                    <div className="d-flex j-c-space-between">
                        <p className="wide-card-heading f-fm-OpenSans ">$ 50.00</p>
                        <img className="edit-btn-icon cursor-pointer" src={EditIcon} alt="EditIcon"/>
                    </div>

                </div>
            </div>
            <div className="side-dish-block-width categories-wide-block bg-clr-white">
                <div style={{backgroundImage: `url(${MenuImage})`}} className="wide-card-image"/>
                <div className="margin-0 wide-card-sibling-div">
                    <p className="wide-card-heading f-fm-OpenSans">Creamy Tomato Pasta</p>
                    <p className="p-r-10 wide-card-description f-w-nomal f-sty-normal f-w-str-normal line-h-normal letter-spc-normal f-fm-OpenSans">
                        Pink pasta! Spaghetti tossed with a creamy tomato…
                    </p>
                    <div className="d-flex j-c-space-between">
                        <p className="wide-card-heading f-fm-OpenSans ">$ 50.00</p>
                        <img className="edit-btn-icon cursor-pointer" src={EditIcon} alt="EditIcon"/>
                    </div>
                </div>
            </div>

            <div className="side-dish-block-width categories-wide-block bg-clr-white">
                <div style={{backgroundImage: `url(${MenuImage})`}} className="wide-card-image"/>
                <div className="margin-0 wide-card-sibling-div">
                    <p className="wide-card-heading f-fm-OpenSans">Creamy Tomato Pasta</p>
                    <p className="p-r-10 wide-card-description f-w-nomal f-sty-normal f-w-str-normal line-h-normal letter-spc-normal f-fm-OpenSans">
                        Pink pasta! Spaghetti tossed with a creamy tomato…
                    </p>
                    <div className="d-flex j-c-space-between">
                        <p className="wide-card-heading f-fm-OpenSans ">$ 50.00</p>
                        <img className="edit-btn-icon cursor-pointer" src={EditIcon} alt="EditIcon"/>
                    </div>
                </div>
            </div>

            <div className="side-dish-block-width categories-wide-block bg-clr-white">
                <div style={{backgroundImage: `url(${MenuImage})`}} className="wide-card-image"/>
                <div className="margin-0 wide-card-sibling-div">
                    <p className="wide-card-heading f-fm-OpenSans">Creamy Tomato Pasta</p>
                    <p className="p-r-10 wide-card-description f-w-nomal f-sty-normal f-w-str-normal line-h-normal letter-spc-normal f-fm-OpenSans">
                        Pink pasta! Spaghetti tossed with a creamy tomato…
                    </p>
                    <div className="d-flex j-c-space-between">
                        <p className="wide-card-heading f-fm-OpenSans ">$ 50.00</p>
                        <img className="edit-btn-icon cursor-pointer" src={EditIcon} alt="EditIcon"/>
                    </div>
                </div>
            </div>

            <div className="side-dish-block-width categories-wide-block bg-clr-white">
                <div style={{backgroundImage: `url(${MenuImage})`}} className="wide-card-image"/>
                <div className="margin-0 wide-card-sibling-div">
                    <p className="wide-card-heading f-fm-OpenSans">Creamy Tomato Pasta</p>
                    <p className="p-r-10 wide-card-description f-w-nomal f-sty-normal f-w-str-normal line-h-normal letter-spc-normal f-fm-OpenSans">
                        Pink pasta! Spaghetti tossed with a creamy tomato…
                    </p>
                    <div className="d-flex j-c-space-between">
                        <p className="wide-card-heading f-fm-OpenSans ">$ 50.00</p>
                        <img className="edit-btn-icon cursor-pointer" src={EditIcon} alt="EditIcon"/>
                    </div>
                </div>
            </div>

            <div className="side-dish-block-width categories-wide-block bg-clr-white">
                <div style={{backgroundImage: `url(${MenuImage})`}} className="wide-card-image"/>
                <div className="margin-0 wide-card-sibling-div">
                    <p className="wide-card-heading f-fm-OpenSans">Creamy Tomato Pasta</p>
                    <p className="p-r-10 wide-card-description f-w-nomal f-sty-normal f-w-str-normal line-h-normal letter-spc-normal f-fm-OpenSans">
                        Pink pasta! Spaghetti tossed with a creamy tomato…
                    </p>
                    <div className="d-flex j-c-space-between">
                        <p className="wide-card-heading f-fm-OpenSans ">$ 50.00</p>
                        <img className="edit-btn-icon cursor-pointer" src={EditIcon} alt="EditIcon"/>
                    </div>
                </div>
            </div>
        </div>

        </>

    )
}