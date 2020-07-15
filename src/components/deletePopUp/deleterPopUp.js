import React from 'react'
import TickImage from '../../assets/images/tick.png'
import CancelImage from '../../assets/images/cancel.png'

export default (props) => {
    let {
        setDelPopUp
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
                    <div className="cross-img-div cursor-pointer">
                        <img src={CancelImage} alt="cancel-img" onClick={() => {setDelPopUp(false)}}/>
                    </div>
                </div>
                {/* popup for add new menu */}
                <form>
                    <div className="main-div-of-popup">
                        <div className="inside-div-of-popup del-popup-width">
                            {/* cancel-img */}
                            <div className="cancel-img-div-inside-popup cursor-pointer">
                                <img src={CancelImage} alt="cancel-img " onClick={() => {setDelPopUp(false)}}/>
                            </div>
                            <div className="heading-paragraph-input-label-div">
                                {/* headoing */}
                                <div className="heading">
                                    <h5 className="m-b-10">Delete</h5>
                                </div>
                                {/* paragraph */}
                                <div className="paragprah">
                                    <p className="margin-0 f-w-nomal f-w-str-normal f-sty-normal letter-spc-normal line-h-normal">
                                        Are you sure you want to delete?
                                    </p>
                                </div>
                                {/* buttons */}
                                <div className="w-100 main-div-of-buttons">
                                    <div className="inside-div-of-btns btns-center">
                                        <span className="common-btn-of-popup color-red">Confirm</span>
                                        <span className="common-btn-of-popup color-grey">Cancel</span>
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