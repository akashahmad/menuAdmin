import React from 'react'
import './style.css'
import Btn from '../../components/commonComponent/button/button'
export default () => {
    return (
        <div className="container-fluid addNewDish-container-fluid">
            <div className="container addNewDish-container">
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
                        <select className="input-fields bg-clr-white">
                            <option value="0">Select</option>
                            <option value="1">B</option>
                            <option value="2">C</option>
                        </select>
                    </div>
                    <div>
                        <p className="heading-clr fields-label-margin">Select Category</p>
                        <select className="input-fields bg-clr-white">
                            <option value="0">Select</option>
                            <option value="1">B</option>
                            <option value="2">C</option>
                        </select>
                    </div>
                    <div>
                        <p className="heading-clr fields-label-margin">Set Price</p>
                        <input className="input-fields bg-clr-white" type="text"/>
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
                        <select className="input-fields bg-clr-white">
                            <option value="0">Select</option>
                            <option value="1">B</option>
                            <option value="2">C</option>
                        </select>
                    </div>

                    <div className="input-fields-empty">

                    </div>
                    <div className="input-fields-empty">

                    </div>
                </div>
                <div className="margin-top-20  addNewDish-fields f-fm-OpenSans  f-s-16 f-w-600 f-sty-normal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                    <div>
                        <p className="heading-clr fields-label-margin">Description <span>(Optional)</span></p>
                        <textarea className="text-area-fields bg-clr-white" type="" placeholder="Text"/>
                    </div>
                    <div>
                        <p className="heading-clr fields-label-margin">Recipe <span>(Optional)</span></p>
                        <textarea className="text-area-fields bg-clr-white" type="" placeholder="Text"/>
                    </div>

                </div>
                <div className="addNewDish-buttons">
                           {/*<Btn/>*/}
                           {/*<Btn/>*/}
                           {/*<Btn/>*/}
                </div>

            </div>

        </div>
    )
}