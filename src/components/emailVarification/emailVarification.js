import React from 'react'
import TickImage from '../../assets/images/tick.png'
import CancelImage from '../../assets/images/cancel.png'

export default (props) => {
    let{
        setAddNewCategoryPopUp
    }=props;
    return (
        <div className="container-fluid">
            <div className="container main-div-of-add-new-menu scroll-y">
                {/* header for conformation*/}
                <div className="inside-main-div">
                    <div className="header-of-confirmation">
                        <img src={TickImage} alt="tick-img" />
                        <p>New menu has been created successfully.</p>
                    </div>
                    {/* cancel img */}
                    <div className="cross-img-div">
                        <img src={CancelImage} alt="cancel-img" onClick={()=>setAddNewCategoryPopUp(false)} />
                    </div>
                </div>
                {/* popup for add new menu */}
                <form>
                    <div className="main-div-of-popup">
                        <div className="inside-div-of-popup">
                            {/* cancel-img */}
                            <div className="cancel-img-div-inside-popup">
                                <img src={CancelImage} alt="cancel-img" onClick={()=>setAddNewCategoryPopUp(false)}/>
                            </div>
                            <div className="heading-paragraph-input-label-div">
                                {/* headoing */}
                                <div className="heading">
                                    <h5>You Did It! <br/> Tell Us Little About Yourself.</h5>
                                </div>
                                {/* label and input */}
                                {/* inputs and label css inputs are defined in common css */}
                                {/* 2 labels and inputs */}
                                <div className="main-div-of-label-and-input-of-add-category-page">
                                    <div className="w-50">
                                        <div>
                                            <label>Menu</label>
                                        </div>
                                        <div>
                                            <input className="add-category-input" placeholder="Text" type="text" />
                                        </div>
                                    </div>
                                    <div className="w-50 second-input">
                                        <div>
                                            <label>Email</label>
                                        </div>
                                        <div>
                                            <input className="add-category-input" placeholder="Text"  type="email"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="margin-top-bottom-30 main-div-of-label-and-input-of-add-category-page">
                                    <div className="w-50">
                                        <div>
                                            <label>Username</label>
                                        </div>
                                        <div>
                                            <input className="add-category-input" placeholder="Username" type="text" />
                                        </div>
                                    </div>
                                    <div className="w-50 second-input">
                                        <div>
                                            <label>Contact Number</label>
                                        </div>
                                        <div>
                                            <input className="add-category-input" placeholder="Contact Number"  type=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-div-of-label-and-input-of-add-category-page">
                                    <div className="w-50">
                                        <div>
                                            <label>Password</label>
                                        </div>
                                        <div>
                                            <input className="add-category-input" placeholder="Password" type="password" />
                                        </div>
                                    </div>
                                    <div className="w-50 second-input">
                                        <div>
                                            <label>Confirm Password</label>
                                        </div>
                                        <div>
                                            <input className="add-category-input" placeholder="Confirm Password"  type="password"/>
                                        </div>
                                    </div>
                                </div>
                                {/* buttons */}
                                <div className="main-div-of-buttons">
                                    <div className="inside-div-of-btns btns-center">
                                        <span className="common-btn-of-popup color-red">Submit</span>
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