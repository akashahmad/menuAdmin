import React, {useState}from 'react'
import {useHistory} from "react-router-dom";
import './style.css'
//import images
import Searchimage from '../../assets/images/search.png'
import EditIcon from '../../assets/images/edit-btn-icon.png'
import DelIcon from '../../assets/images/trash.png'
export default (props) => {
    let {setAddNewUserPopUp, setDelPopUp} = props;
    let history = useHistory();
    return (
        <div className="container-fluid menu-section-one">
            <div className=" menu-container-menu-bar">
                {/*setting menu list*/}
                <div className="menu-list-block">
                    <ul className=" f-fm-OpenSans f-s-16 f-w-nomal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal menu-ul txt-color-gray ">
                        <li className="menu-ul-li">General</li>
                        <li className="menu-ul-li">Users</li>
                        <li className="menu-ul-li">Option 1</li>
                        <li className="menu-ul-li">Option 2</li>
                        <li className="menu-ul-li">Option 3</li>
                    </ul>
                </div>
                {/*search and action*/}
                <div className="menu-search-action m-r-20">
                    <div className="search-main-div">
                        <input className="menu-search-box" type="text" placeholder="Search.."/>
                        <div className="menu-search-icon"><img src={Searchimage} alt="search-icon"/></div>
                    </div>
                </div>
            </div>

            {/*heading section*/}
            <div className="setting-container-head margin-top-bottom-30">
                <div
                    className="p-t-10 addNewDish-container-left heading-clr f-fm-OpenSans f-s-24 f-w-600 f-w-str-normal f-sty-normal letter-spc-normal">
                    Side Dishes
                </div>
                <div className="d-flex">
                    <button
                        onClick={() => setAddNewUserPopUp(true)}
                        className="bg-clr-Orange small-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                        Add User
                    </button>
                </div>
            </div>
            {/*wide cards in settings*/}
            <div className="container side-dish-cards">
                <div className="side-dish-block-width categories-wide-block bg-clr-white">
                    <div className="setting-wide-card-main-div">
                        <div className="setting-wide-card-inner-div d-flex j-c-space-between">
                            <div>
                                <p className="f-fm-OpenSans f-s-14 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                    Name
                                </p>
                            </div>
                            <div className="d-flex">
                                <img className="edit-btn-icon cursor-pointer" src={EditIcon} alt="EditIcon"/>
                                <img className="edit-btn-icon cursor-pointer" src={DelIcon} alt="del-Icon"
                                     onClick={() => {
                                         setDelPopUp(true)
                                     }}
                                />
                            </div>

                        </div>
                        <div className="">
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Username</div>
                                <div className="text-clr-light-gray ">Ali</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Contact No</div>
                                <div className="text-clr-light-gray ">44 831 1234567</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Email</div>
                                <div className="text-clr-light-gray ">test@gmail.com</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">
                                    Admin Excess
                                </div>
                                <div className="text-clr-light-gray "></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-dish-block-width categories-wide-block bg-clr-white">
                    <div className="setting-wide-card-main-div">
                        <div className="setting-wide-card-inner-div d-flex j-c-space-between">
                            <div>
                                <p className="f-fm-OpenSans f-s-14 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                    Name
                                </p>
                            </div>
                            <div className="d-flex">
                                <img className="edit-btn-icon cursor-pointer" src={EditIcon} alt="EditIcon"/>
                                <img className="edit-btn-icon cursor-pointer" src={DelIcon} alt="del-Icon"
                                     onClick={() => {
                                         setDelPopUp(true)
                                     }}
                                />
                            </div>

                        </div>
                        <div className="">
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Username</div>
                                <div className="text-clr-light-gray ">Ali</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Contact No</div>
                                <div className="text-clr-light-gray ">44 831 1234567</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Email</div>
                                <div className="text-clr-light-gray ">test@gmail.com</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">
                                    Admin Excess
                                </div>
                                <div className="text-clr-light-gray "></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-dish-block-width categories-wide-block bg-clr-white">
                    <div className="setting-wide-card-main-div">
                        <div className="setting-wide-card-inner-div d-flex j-c-space-between">
                            <div>
                                <p className="f-fm-OpenSans f-s-14 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                    Name
                                </p>
                            </div>
                            <div className="d-flex">
                                <img className="edit-btn-icon cursor-pointer" src={EditIcon} alt="EditIcon"/>
                                <img className="edit-btn-icon cursor-pointer" src={DelIcon} alt="del-Icon"
                                     onClick={() => {
                                         setDelPopUp(true)
                                     }}
                                />
                            </div>

                        </div>
                        <div className="">
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Username</div>
                                <div className="text-clr-light-gray ">Ali</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Contact No</div>
                                <div className="text-clr-light-gray ">44 831 1234567</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Email</div>
                                <div className="text-clr-light-gray ">test@gmail.com</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">
                                    Admin Excess
                                </div>
                                <div className="text-clr-light-gray "></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-dish-block-width categories-wide-block bg-clr-white">
                    <div className="setting-wide-card-main-div">
                        <div className="setting-wide-card-inner-div d-flex j-c-space-between">
                            <div>
                                <p className="f-fm-OpenSans f-s-14 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                    Name
                                </p>
                            </div>
                            <div className="d-flex">
                                <img className="edit-btn-icon cursor-pointer" src={EditIcon} alt="EditIcon"/>
                                <img className="edit-btn-icon cursor-pointer" src={DelIcon} alt="del-Icon"
                                     onClick={() => {
                                         setDelPopUp(true)
                                     }}
                                />
                            </div>

                        </div>
                        <div className="">
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Username</div>
                                <div className="text-clr-light-gray ">Ali</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Contact No</div>
                                <div className="text-clr-light-gray ">44 831 1234567</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Email</div>
                                <div className="text-clr-light-gray ">test@gmail.com</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">
                                    Admin Excess
                                </div>
                                <div className="text-clr-light-gray "></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-dish-block-width categories-wide-block bg-clr-white">
                    <div className="setting-wide-card-main-div">
                        <div className="setting-wide-card-inner-div d-flex j-c-space-between">
                            <div>
                                <p className="f-fm-OpenSans f-s-14 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                    Name
                                </p>
                            </div>
                            <div className="d-flex">
                                <img className="edit-btn-icon cursor-pointer" src={EditIcon} alt="EditIcon"/>
                                <img className="edit-btn-icon cursor-pointer" src={DelIcon} alt="del-Icon"
                                     onClick={() => {
                                         setDelPopUp(true)
                                     }}
                                />
                            </div>

                        </div>
                        <div className="">
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Username</div>
                                <div className="text-clr-light-gray ">Ali</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Contact No</div>
                                <div className="text-clr-light-gray ">44 831 1234567</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">Email</div>
                                <div className="text-clr-light-gray ">test@gmail.com</div>
                            </div>
                            <div
                                className="d-flex m-b-10 f-fm-OpenSans f-s-14 f-w-n f-w-str-normal f-sty-normal line-h-normal letter-spc-normal heading-clr">
                                <div className="setting-label-width">
                                    Admin Excess
                                </div>
                                <div className="text-clr-light-gray "/>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
}