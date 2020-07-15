import React from 'react'
import TickImage from '../../assets/images/tick.png'
import CancelImage from '../../assets/images/cancel.png'

export default (props) => {
    let {
        setAddNewUserPopUp
    } = props;
    return (
        <div className="container-fluid">
            <div className="container main-div-of-add-new-menu scroll-y">
                {/* header for conformation*/}
                <div className="inside-main-div">
                    <div className="header-of-confirmation">
                        <img src={TickImage} alt="tick-img"/>
                        <p>New menu has been created successfully.</p>
                    </div>
                    {/* cancel img */}
                    <div className="cross-img-div">
                        <img src={CancelImage} alt="cancel-img" onClick={() => {setAddNewUserPopUp(false)}}/>
                    </div>
                </div>
                {/* popup for add new menu */}
                <form>
                    <div className="main-div-of-popup">
                        <div className="inside-div-of-popup">
                            {/* cancel-img */}
                            <div className="cancel-img-div-inside-popup cursor-pointer">
                                <img src={CancelImage} alt="cancel-img " onClick={() => {setAddNewUserPopUp(false)}}/>
                            </div>
                            <div className="heading-paragraph-input-label-div">
                                {/* headoing */}
                                <div className="heading">
                                    <h5 className="m-b-10">Add New User</h5>
                                </div>
                                {/* paragraph */}
                                <div className="paragprah">
                                    <p className="margin-0 f-w-nomal f-w-str-normal f-sty-normal letter-spc-normal line-h-normal">You can add multiple users by clicking “Save & Add More” button.</p>
                                </div>
                                {/* label and input */}
                                {/* inputs and label css inputs are defined in common css */}
                                {/* 2 labels and inputs */}
                                <div className="main-div-of-label-and-input-of-add-category-page">
                                    <div className="w-100">
                                        <div className="margin-top-10">
                                            <label>Email</label>
                                        </div>
                                        <div className="w-100 margin-top-10">
                                            <input className=" input-fields bg-clr-white" type="email" placeholder="johndoe@gmail.com"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-div-of-label-and-input-of-add-category-page margin-top-10">
                                    <div className="w-100">
                                        <div className="w-100">
                                            <div>
                                                <label>Admin Excess</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*checkboxes*/}
                                <div className="w-100 d-flex margin-top-10 ">
                                    <div className="w-50">
                                        <div className=" d-flex checkbox-main-div">
                                            <div className="common-check-box">
                                                <input type="checkbox" className="myinput large cursor-pointer"/>
                                            </div>
                                            <label
                                                className=" checkbox-label-padding f-fm-OpenSans f-s-14 heading-clr f-w-nomal f-sty-normal f-sty-normal line-h-normal letter-spc-normal">
                                                Orders
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-50">
                                        <div className=" d-flex checkbox-main-div">
                                            <div className="common-check-box">
                                                <input type="checkbox" className="myinput large cursor-pointer"/>
                                            </div>
                                            <label
                                                className=" checkbox-label-padding f-fm-OpenSans f-s-14 heading-clr f-w-nomal f-sty-normal f-sty-normal line-h-normal letter-spc-normal">
                                                Profile
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-100 d-flex margin-top-10 ">
                                    <div className="w-50">
                                        <div className=" d-flex ">
                                            <div className="common-check-box">
                                                <input type="checkbox" className="myinput large cursor-pointer"/>
                                            </div>
                                            <label
                                                className=" checkbox-label-padding f-fm-OpenSans f-s-14 heading-clr f-w-nomal f-sty-normal f-sty-normal line-h-normal letter-spc-normal">
                                                Menu
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-50">
                                        <div className=" d-flex ">
                                            <div className="common-check-box">
                                                <input type="checkbox" className="myinput large cursor-pointer"/>
                                            </div>
                                            <label
                                                className=" checkbox-label-padding f-fm-OpenSans f-s-14 heading-clr f-w-nomal f-sty-normal f-sty-normal line-h-normal letter-spc-normal">
                                                Sales
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-100 d-flex margin-top-10 ">
                                    <div className="w-50">
                                        <div className=" d-flex ">
                                            <div className="common-check-box">
                                                <input type="checkbox" className="myinput large cursor-pointer"/>
                                            </div>
                                            <label
                                                className=" checkbox-label-padding f-fm-OpenSans f-s-14 heading-clr f-w-nomal f-sty-normal f-sty-normal line-h-normal letter-spc-normal">
                                                Side Dish
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-50">
                                        <div className=" d-flex">
                                            <div className="common-check-box">
                                                <input type="checkbox" className="myinput large cursor-pointer"/>
                                            </div>
                                            <label
                                                className=" checkbox-label-padding f-fm-OpenSans f-s-14 heading-clr f-w-nomal f-sty-normal f-sty-normal line-h-normal letter-spc-normal">
                                                Side Dish
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                {/* buttons */}
                                <div className="w-100 main-div-of-buttons">
                                    <div className="inside-div-of-btns btns-center">
                                        <span className="common-btn-of-popup color-red">Save & Add More</span>
                                        <span className="common-btn-of-popup color-grey">Add Category to</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}