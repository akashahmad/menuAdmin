import React from 'react'
import  './style.css'
export  default () => {
    return (
        <div className="container-fluid add-new-side-dish">
            <div className="container-fluid addNewDish-section-one">
                <div className="addNewDish-container-head margin-top-bottom-30">
                    <div
                        className="p-t-10 addNewDish-container-left heading-clr f-fm-OpenSans f-s-24 f-w-600 f-w-str-normal f-sty-normal letter-spc-normal">
                        Add New Side Dishes
                    </div>
                </div>
                {/* Add New Side Dishes form start*/}
                <div
                    className="addNewSideDish-fields d-flex  f-fm-OpenSans  f-s-16 f-w-600 f-sty-normal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                    <div className="f-fm-OpenSans m-r-5 w-25 ">
                        <p className="heading-clr fields-label-margin">
                            Dish Title
                        </p>
                        <input className="input-fields bg-clr-white" type="text" placeholder="Text"/>
                    </div>
                    <div className="w-25">
                        <p className="heading-clr fields-label-margin">Set Price</p>
                        <input className="input-fields bg-clr-white" type="text" placeholder="Text"/>
                    </div>
                    <div className="w-25">

                    </div>
                    <div className="w-25">

                    </div>
                </div>
                {/*description and recip*/}
                <div
                    className="margin-top-20  addNewDish-fields   f-s-16 f-w-600  f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                    <div className="w-50">
                        <p className="heading-clr f-fm-OpenSans fields-label-margin">Description &nbsp; &nbsp;
                            <span className="f-w-nomal text-clr-light-gray">(Optional)</span>
                        </p>
                        <textarea className="text-area-fields bg-clr-white "
                                  type="" placeholder="Text"/>
                    </div >
                    <div className="w-50">
                        <p className="heading-clr f-fm-OpenSans fields-label-margin">Recipe &nbsp; &nbsp;
                            <span className="f-w-nomal text-clr-light-gray">(Optional)</span></p>
                        <textarea
                            className="text-area-fields bg-clr-white "
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

            </div>
        </div>
    );
}