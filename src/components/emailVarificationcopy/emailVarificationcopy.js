import React from 'react'
import TickImage from '../../assets/images/tick.png'
import CancelImage from '../../assets/images/cancel.png'

export default (props) => {
    let {
        setAddNewCategoryPopUp
    } = props;
    return (
        <div className="container-fluid">
            <div className="container main-div-of-add-new-menu">
                {/* header for conformation*/}
                <div className="inside-main-div">
                    <div className="header-of-confirmation">
                        <img src={TickImage} alt="tick-img"/>
                        <p>New menu has been created successfully.</p>
                    </div>
                    {/* cancel img */}
                    <div className="cross-img-div">
                        <img src={CancelImage} alt="cancel-img" onClick={() => setAddNewCategoryPopUp(false)}/>
                    </div>
                </div>
                {/* popup for add new menu */}
                <form>
                    <div className="main-div-of-popup scroll-y">
                        <div className="inside-div-of-popup">
                            {/* cancel-img */}
                            <div className="cancel-img-div-inside-popup">
                                <img src={CancelImage} alt="cancel-img" onClick={() => setAddNewCategoryPopUp(false)}/>
                            </div>
                            <div className="heading-paragraph-input-label-div">
                                {/* headoing */}
                                <div className="heading">
                                    <h5>Wellcome Back!</h5>
                                </div>
                                {/* label and input */}
                                {/* inputs and label css inputs are defined in common css */}
                                {/* 2 labels and inputs */}
                                <div className="main-div-of-label-and-input-of-add-category-page">
                                    <div className="w-100">
                                        <div>
                                            <label>Username</label>
                                        </div>
                                        <div>
                                            <input className="add-category-input" type="text" placeholder="Username"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="margin-top-bottom-30 main-div-of-label-and-input-of-add-category-page">
                                    <div className="w-100">
                                        <div>
                                            <label>Password</label>
                                        </div>
                                        <div>
                                            <input className="add-category-input" type="password"
                                                   placeholder="Password"/>
                                        </div>
                                    </div>
                                </div>
                                <div className=" main-div-of-label-and-input-of-add-category-page">
                                    <div className="w-100">
                                        <div className=" d-flex checkbox-main-div">
                                            <div className="common-check-box">
                                                <input type="checkbox" className="myinput large cursor-pointer"/>
                                            </div>
                                            <label
                                                className=" checkbox-label-padding f-fm-OpenSans f-s-14 heading-clr f-w-nomal f-sty-normal f-sty-normal line-h-normal letter-spc-normal">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-div-of-buttons">
                                    <div className="inside-div-of-btns btns-center">
                                        <span className="common-btn-of-popup color-red">Login</span>
                                    </div>
                                </div>
                                <div className="main-div-of-buttons">
                                    <div className="inside-div-of-btns btns-center">
                                        <span className="text-clr-orange f-sty-normal f-w-str-normal f-w-nomal f-fm-OpenSans line-h-normal letter-spc-normal f-s-16 cursor-pointer">Forgot Password?</span>
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