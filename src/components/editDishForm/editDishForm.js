import React, {useState} from 'react'
import './style.css'
//import components

//import images
import OrangeCrossImage from '../../assets/images/orange-cross-image.png'

export default (props) => {
    let {
        toggleBtn, setToggleBtn
    } = props;
    // const [addVariation, setAddVariation] = useState(false);
    // const [addSideDish, setAddSideDish] = useState(false);
    return (
        <div className="container-fluid addNewDish-container-fluid">
            <div className="container addNewDish-container">
                {/*starting fields*/}
                <div
                    className="addNewDish-fields f-fm-OpenSans  f-s-16 f-w-600 f-sty-normal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                    <div className="f-fm-OpenSans  ">
                        <p className="heading-clr fields-label-margin">
                            Dish Title
                        </p>
                        <input className="input-fields bg-clr-white" type="text" placeholder="Text"/>
                    </div>
                    <div>
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
                    <div>
                        <p className="heading-clr fields-label-margin">Set Price</p>
                        <input className="input-fields bg-clr-white" type="text" placeholder="$00.00"/>
                    </div>
                </div>
                <div
                    className="margin-top-20  addNewDish-fields f-fm-OpenSans  f-s-16 f-w-600 f-sty-normal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                    <div>
                        <p className="heading-clr fields-label-margin">Add Image</p>
                        <input className="input-fields bg-clr-white" type=""/>
                    </div>
                    <div>
                        <p className="heading-clr fields-label-margin">Serving Person</p>
                        <select >
                            <option className="select-option" value="">Select</option>
                            <option className="select-option" value="">A</option>
                        </select>
                    </div>

                    <div className="input-fields-empty">

                    </div>
                    <div className="input-fields-empty">

                    </div>
                </div>
                {/*text Area description and recipe*/}
                <div
                    className="margin-top-20  addNewDish-fields   f-s-16 f-w-600 f-sty-normal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                    <div>
                        <p className="heading-clr f-fm-OpenSans fields-label-margin">Description &nbsp; &nbsp;
                            <span className="f-w-nomal text-clr-light-gray">(Optional)</span>
                        </p>
                        <textarea
                            className="text-area-fields bg-clr-white f-fm-OpenSans  f-s-16 f-w-nomal f-sty-normal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal"
                            type="" placeholder="Text"/>
                    </div>
                    <div>
                        <p className="heading-clr f-fm-OpenSans fields-label-margin">Recipe &nbsp; &nbsp;
                            <span className="f-w-nomal text-clr-light-gray">(Optional)</span></p>
                        <textarea
                            className="text-area-fields bg-clr-white f-fm-OpenSans  f-s-16 f-w-nomal f-sty-normal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal"
                            type="" placeholder="Text"/>
                    </div>
                </div>
                {/*buttons*/}
                <div className=" margin-top-bottom-30 addNewDish-buttons">
                    <button
                        className="large-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                        Save
                    </button>
                    <button
                        className="large-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                        Add More Dishes
                    </button>
                    <button
                        className="large-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                        Cancel
                    </button>
                </div>
                {/*toggle btn*/}
                <div
                    className=" addNewDish-two-toggle-buttons-section f-fm-OpenSans  f-s-16 f-w-600 f-sty-normal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                    {/*add side dish*/}
                    <div>
                        <div className="addNewDish-toggle-inner-div">
                            <div className="toggle-main-div">
                                <div className="common-toggle-btn">
                                    <label className="switch ">
                                        <input type="checkbox"/>
                                        <div className="slider round">
                                            <span className="on">YES</span>
                                            <span className="off">NO</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="padding-10">Add Side Dish</div>
                        </div>
                        {/*add side menu*/}
                        <div className="addNewDish-toggle-inner-div margin-top-20">
                            <div>
                                <p className="heading-clr fields-label-margin">Add Side Menu</p>
                                <select >
                                    <option className="select-option" value="">Select</option>
                                    <option className="select-option" value="">A</option>
                                </select>
                            </div>
                            <div className="input-fields-empty">

                            </div>
                        </div>
                        {/*check-boxes*/}
                        <div className="addNewDish-toggle-inner-div margin-top-20">
                            <div className="d-flex checkbox-main-div">
                                <div className="common-check-box">
                                    <input type="checkbox" className="myinput large cursor-pointer"/>
                                </div>
                                <label
                                    className=" padding-10 f-fm-OpenSans f-s-14 heading-clr f-w-nomal f-sty-normal f-sty-normal line-h-normal letter-spc-normal">
                                    Free
                                </label>
                            </div>
                            <div className="d-flex check-box-main-div">
                                <div className="common-check-box">
                                    <input type="checkbox" className="myinput large cursor-pointer"/>
                                </div>
                                <label
                                    className="padding-10 f-fm-OpenSans f-s-14 heading-clr f-w-nomal f-sty-normal f-sty-normal line-h-normal letter-spc-normal">Paid</label>
                            </div>
                        </div>
                        {/*Add button*/}
                        <div className="addNewDish-toggle-inner-div margin-top-20">
                            <button
                                className="small-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                                Add
                            </button>
                        </div>
                        {/*<div className=" margin-top-20">*/}
                        {/*<div className=" input-fields border-color-orange bg-clr-white">*/}
                        {/*<p className="">Side Dish 1 - Free <span><img className="crossImage cursor-pointer"*/}
                        {/*src={OrangeCrossImage} alt=""/></span>*/}
                        {/*</p>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                    </div>

                    {/*Add Variation*/}
                    <div className="margin-left-10">
                        <div className="addNewDish-toggle-inner-div  ">
                            <div className="toggle-main-div">
                                <div className="common-toggle-btn">
                                    <label className="switch ">
                                        <input type="checkbox"/>
                                        <div className="slider round">
                                            <span className="on">YES</span>
                                            <span className="off">NO</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="padding-10 ">Add Variations</div>
                        </div>
                        {/*variation and selection*/}
                        <div className="addNewDish-toggle-inner-div margin-top-20">
                            <div>
                                <p className="heading-clr fields-label-margin">Variation Title</p>
                                <input className="input-fields bg-clr-white" type="" placeholder="Size"/>
                            </div>
                            <div className="margin-left-10">
                                <p className="heading-clr fields-label-margin">Selection Option</p>
                                <select >
                                    <option className="select-option" value="">Select</option>
                                    <option className="select-option" value="">A</option>
                                </select>
                            </div>
                        </div>
                        {/* sub title and price*/}
                        <div className="addNewDish-toggle-inner-div margin-top-20">
                            <div>
                                <p className="heading-clr fields-label-margin">Sub Title</p>
                                <input className="input-fields bg-clr-white" type="" placeholder="Small,Medium,Large"/>
                                <p className="text-clr-light-gray">
                                    (Values should be comma separated.E.g small,medium,large)
                                </p>

                            </div>
                            <div className="margin-left-10">
                                <p className="heading-clr fields-label-margin">Set Price ($)</p>
                                <input className="input-fields bg-clr-white" type="" placeholder="10.00,15.00,20.00"/>
                                <p className="text-clr-light-gray">
                                    (Values should be comma separated.E.g 10.00,20.00,30.00)
                                </p>
                            </div>
                        </div>
                        {/*Add button*/}
                        <div className="addNewDish-toggle-inner-div margin-top-20">
                            <button
                                className="small-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                                Add
                            </button>
                        </div>

                        <div className=" margin-top-20 d-flex">
                            {/*<div className=" size-description border-color-orange bg-clr-white">*/}
                            {/*<p className="padding-10  heading-clr">Size<span><img*/}
                            {/*className="crossImage cursor-pointer" src={OrangeCrossImage} alt=""/></span></p>*/}
                            {/*<div className="padding-10 ">*/}
                            {/*<p>Small<span className="crossImage">$10.00</span></p>*/}
                            {/*<p>Medium<span className="crossImage">$10.00</span></p>*/}
                            {/*<p>Large<span className="crossImage">$10.00</span></p>*/}
                            {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="margin-left-10 size-description border-color-orange bg-clr-white">*/}
                            {/*<p className="padding-10  heading-clr">Toppings<span><img*/}
                            {/*className="crossImage cursor-pointer" src={OrangeCrossImage} alt=""/></span></p>*/}
                            {/*<div className="padding-10 ">*/}
                            {/*<p>Pepperoni<span className="crossImage">$10.00</span></p>*/}
                            {/*<p>Onion<span className="crossImage">$10.00</span></p>*/}
                            {/*<p>Mushroom<span className="crossImage">$10.00</span></p>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}