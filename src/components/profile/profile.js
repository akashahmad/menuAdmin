import React, {useState} from 'react'
import './style.css'
//import components

//import images
import OrangeCrossImage from '../../assets/images/orange-cross-image.png'

export default (props) => {
    let {} = props;
    // const [addVariation, setAddVariation] = useState(false);
    // const [addSideDish, setAddSideDish] = useState(false);
    return (
        <div className="container-fluid addNewDish-container-fluid">
            <div className="container addNewDish-container">
                {/*heading*/}
                <div className="addNewDish-container-head margin-top-bottom-30">
                    <div
                        className="p-t-10 addNewDish-container-left heading-clr f-fm-OpenSans f-s-24 f-w-600 f-w-str-normal f-sty-normal letter-spc-normal">
                        Restaurant Profile
                    </div>
                </div>
                {/*starting fields*/}
                <div
                    className="addNewDish-fields f-fm-OpenSans  f-s-16 f-w-600 f-sty-normal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                    <div className="f-fm-OpenSans  ">
                        <p className="heading-clr fields-label-margin">
                            Restaurant Name
                        </p>
                        <input className="input-fields bg-clr-white" type="text" placeholder="Text"/>
                    </div>
                    <div>
                        <p className="heading-clr fields-label-margin">Genre</p>
                        <input className="input-fields bg-clr-white" type="text" placeholder="Text"/>
                    </div>
                    <div>
                        <p className="heading-clr fields-label-margin">Owner Name</p>
                        <input className="input-fields bg-clr-white" type="text" placeholder="Text"/>
                    </div>
                    <div>
                        <p className="heading-clr fields-label-margin">Contact Number</p>
                        <input className="input-fields bg-clr-white" type="text" placeholder="$00.00"/>
                    </div>
                </div>
                <div
                    className="margin-top-20  addNewDish-fields f-fm-OpenSans  f-s-16 f-w-600 f-sty-normal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                    <div>
                        <p className="heading-clr fields-label-margin">Email</p>
                        <input className="input-fields bg-clr-white" type="" placeholder="Text"/>
                    </div>
                    <div>
                        <p className="heading-clr fields-label-margin">Address</p>
                        <input className="input-fields bg-clr-white" type="" placeholder="Text"/>
                    </div>

                    <div>
                        <p className="heading-clr fields-label-margin">City</p>
                        <input className="input-fields bg-clr-white" type="" placeholder="Text"/>
                    </div>
                    <div>
                        <p className="heading-clr fields-label-margin">State</p>
                        <select >
                            <option className="select-option" value="">Select</option>
                            <option className="select-option" value="">A</option>
                        </select>
                    </div>
                </div>
                {/*text Area description and recipe*/}
                <div className="margin-top-20  addNewDish-fields   f-s-16 f-w-600 f-sty-normal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                    <div className="text-area-full-width-main-div">
                        <p className="heading-clr f-fm-OpenSans fields-label-margin">Description &nbsp; &nbsp;
                            <span className="f-w-nomal text-clr-light-gray">(Optional)</span>
                        </p>
                        <textarea
                            className="text-area-full-width text-area-fields bg-clr-white f-fm-OpenSans  f-s-16 f-w-nomal f-sty-normal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal"
                            type="" placeholder="Text"/>
                    </div>
                </div>
                {/*buttons*/}
                <div className=" margin-top-bottom-30 addNewDish-buttons">
                    <button
                        className="large-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                        Update
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