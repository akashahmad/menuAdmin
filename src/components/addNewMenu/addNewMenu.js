import React from 'react'
import TickImage from '../../assets/images/tick.png'
import CancelImage from '../../assets/images/cancel.png'

export default (props) => {
    let{
        setAddNewMenuPopUp
    }=props;
    return (
        <div className="container-fluid">
            <div className="container main-div-of-add-new-menu">
                {/* header for conformation*/}
                <div className="inside-main-div">
                    <div className="header-of-confirmation">
                        <img src={TickImage} alt="tick-img" />
                        <p>New menu has been created successfully.</p>
                    </div>
                    {/* cancel img */}
                    <div className="cross-img-div" onClick={()=>setAddNewMenuPopUp(false)}>
                        <img className="cursor-pointer" src={CancelImage} alt="cancel-img"  />
                    </div>
                </div>
                {/* popup for add new menu */}
                <form>
                    <div className="main-div-of-popup">
                        <div className="inside-div-of-popup">
                            {/* cancel-img */}
                            <div className="cancel-img-div-inside-popup">
                                <img className="cursor-pointer" src={CancelImage} alt="cancel-img" onClick={()=>  setAddNewMenuPopUp(false) }/>
                            </div>
                            <div className="heading-paragraph-input-label-div">
                                {/* headoing */}
                                <div className="heading">
                                    <h5>Add New Menu</h5>
                                </div>
                                {/* paragraph */}
                                <div className="paragprah">
                                    <p>You can add multiple menues by clicking "Save and More " button</p>
                                </div>
                                {/* label and input */}
                                {/* inputs and label css inputs are defined in common css */}
                                <div className="main-div-of-label-and-input">
                                    <div>
                                        <label>Menu</label>
                                    </div>
                                    <div>
                                        <input className="add-menu-input" placeholder="Text" />
                                    </div>
                                </div>
                                {/* buttons */}
                                <div className="main-div-of-buttons">
                                    <div className="inside-div-of-btns">
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