import React, {useState} from 'react'
import './style.css'
//import components

//import images

export default (props) => {
    let {} = props;

    return (
        <div className="container-fluid addNewDish-section-one">
            <div className="addNewDish-container-head margin-top-bottom-30">
                <div
                    className="addNewDish-container-left heading-clr f-fm-OpenSans f-s-24 f-w-600 f-w-str-normal f-sty-normal letter-spc-normal">
                    Delete Dishes
                </div>
            </div>
            {/*FORM START*/}
            <div className="container-fluid addNewDish-container-fluid">
                <div className="container delete-Dish-container">
                    <div
                        className="addNewDish-fields f-fm-OpenSans  f-s-16 f-w-600 f-sty-normal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                        <div className="f-fm-OpenSans  ">
                            <p className="heading-clr fields-label-margin">Select Menu</p>
                            <select >
                                <option className="select-option" value="">Select</option>
                                <option className="select-option" value="">A</option>
                            </select>
                        </div>
                        <div>
                            <p className="heading-clr fields-label-margin">Select Category</p>
                            <select >
                                <option className="select-option" value="">Select</option>
                                <option className="select-option" value="">A</option>
                            </select>
                        </div>
                        <div className="input-fields-empty">

                        </div>

                        <div className="del-dish-main-div-of-right-btn">
                            <button
                                className="medium-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                                Select All
                            </button>
                            <button
                                className="medium-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                                De Select All
                            </button>
                        </div>
                    </div>

                </div>
                {/*row 1*/}
                <div className=" container row-with-white-bg m-b-10">
                    <div className="d-flex del-dish-main-div-of-checkbox ">
                        <div className="common-check-box margin-left-10">
                            <input type="checkbox" className="myinput large cursor-pointer"/>
                        </div>
                        <label
                            className="del-dish-check-box-label f-fm-OpenSans f-s-14 heading-clr f-w-nomal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                            Dish
                        </label>
                    </div>
                    <div>
                        <button
                            className="p-0 margin-0 medium-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                            Delete
                        </button>
                    </div>
                </div>
                {/*row 2*/}
                <div className=" container row-with-white-bg m-b-10">
                    <div className="d-flex del-dish-main-div-of-checkbox ">
                        <div className="common-check-box margin-left-10">
                            <input type="checkbox" className="myinput large cursor-pointer"/>
                        </div>
                        <label
                            className="del-dish-check-box-label f-fm-OpenSans f-s-14 heading-clr f-w-nomal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                            Dish
                        </label>
                    </div>
                    <div>
                        <button
                            className="p-0 margin-0 medium-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                            Delete
                        </button>
                    </div>
                </div>
                {/*del dish footer btn section*/}
                <div className="d-flex ">
                    <button
                        className="large-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                        Delete
                    </button>
                    <button
                        className="large-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                        Cancel
                    </button>
                </div>


            </div>
        </div>

    )
}