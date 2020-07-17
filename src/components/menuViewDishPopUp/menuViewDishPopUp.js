import React, {useState} from 'react'
import TickImage from '../../assets/images/tick.png'
import CancelImage from '../../assets/images/cancel.png'
import DishImage from '../../assets/images/menuImg.png'
import Tick from '../../assets/images/whit-tick.png'

export default (props) => {
    let {
        setAddNewCategoryPopUp
    } = props;
    const [checkBox, setCheckBox] = useState(false)
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
                    <div className="cross-img-div cursor-pointer">
                        <img className="cursor-pointer" src={CancelImage} alt=" cancel-img"
                             onClick={() => setAddNewCategoryPopUp(false)}/>
                    </div>
                </div>
                {/* popup for add new menu */}
                <form>
                    <div className="main-div-of-popup">
                        <div className="inside-div-of-popup">
                            {/* cancel-img */}
                            <div className="cancel-img-div-inside-popup">
                                <img className="cursor-pointer" src={CancelImage} alt="cancel-img"
                                     onClick={() => setAddNewCategoryPopUp(false)}
                                />
                            </div>
                            <div className="w-100 d-flex">
                                <div className="w-25"><img style={{height: '130px',width: '130px'}} src={DishImage} alt="img"/></div>
                                <div className="">
                                    <div>
                                        <h2 className="margin-top-0 f-fm-OpenSans f-s-16 f-w-600 f-sty-normal f-w-str-normal letter-spc-normal line-h-normal heading-clr">
                                            Creamy Tomato Pasta
                                        </h2>
                                    </div>
                                    <div>
                                        <div className="  f-fm-OpenSans f-s-16 f-w-600 f-sty-normal f-w-str-normal letter-spc-normal line-h-normal heading-clr">
                                            <div className="d-flex j-c-space-between">
                                                <p className="margin-top-0  m-b-10">Menu </p><p className="margin-top-0  m-b-10 f-s-16 f-w-nomal ">Menu A</p>
                                            </div>
                                        </div>
                                        <div className="f-fm-OpenSans f-s-16 f-w-600 f-sty-normal f-w-str-normal letter-spc-normal line-h-normal heading-clr">
                                            <div className="d-flex j-c-space-between">
                                                <p className="margin-top-0 m-b-10">Category </p><p className=" m-b-10 margin-top-0 f-s-16 f-w-nomal ">Category 2</p>
                                            </div>
                                        </div>
                                        <div className="f-fm-OpenSans f-s-16 f-w-600 f-sty-normal f-w-str-normal letter-spc-normal line-h-normal heading-clr">
                                            <div className="d-flex j-c-space-between">
                                                <p className="margin-top-0  m-b-10">Serving </p><p className="  m-b-10 margin-top-0 f-s-16 f-w-nomal ">Serving 1</p>
                                            </div>
                                        </div>
                                        <div
                                            className="f-fm-OpenSans f-s-16 f-w-600 f-sty-normal f-w-str-normal letter-spc-normal line-h-normal heading-clr">
                                            <div className="d-flex j-c-space-between">
                                                <p className="margin-top-0  m-b-10">Price </p><p className=" m-b-10  margin-top-0 f-s-16 f-w-nomal ">Price $50.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100">
                                <div className="w-100"><h2>Description</h2>
                                </div>
                                <div className="w-100 f-fm-OpenSans f-s-14 f-w-n f-sty-normal f-w-str-normal letter-spc-normal line-h-normal text-clr-light-gray"><p>Pink pasta! Spaghetti tossed with a creamy tomato sauce that’s
                                    totally slurp worthy,
                                    this Creamy Tomato Pasta is silky and indulgent tasting but the tomato cream sauce
                                    doesn’t actually have that much cream in it!

                                    Serve it as is, or use it as a base for your own add-ins. Try tossing through some
                                    shredded leftover Roast Chicken or Poached Chicken, or adding a handful of
                                    spinach.</p>
                                </div>
                            </div>
                            <div className="w-100 d-flex">
                                <div className="w-50">
                                    <h2>Sauce</h2>
                                    <div className="d-flex del-dish-main-div-of-checkbox ">
                                        <div className="common-check-box margin-left-10">
                                            <div className="">
                                                <div style={{position: 'absolute'}}>
                                                    <input type="checkbox" className="custom-checkbox-input"
                                                           onChange={() => {
                                                               checkBox ? setCheckBox(false) : setCheckBox(true)
                                                           }}
                                                    /></div>

                                                {!checkBox ?
                                                    <div className="radiobtn-unchecked"/> :
                                                    <div className="checked-radiobtn">
                                                        <img className="checked-box-tick" src={Tick} alt=""/>
                                                    </div>}
                                            </div>
                                        </div>
                                        <label
                                            className="del-dish-check-box-label f-fm-OpenSans f-s-14 heading-clr f-w-nomal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                                            Sauce A
                                            <sapn>- $2.00</sapn>
                                        </label>
                                    </div>
                                </div>
                                <div className="w-50">
                                    <h2>Toppings</h2>
                                    <div className="d-flex del-dish-main-div-of-checkbox ">
                                        <div className="common-check-box margin-left-10">
                                            <div className="">
                                                <div style={{position: 'absolute'}}>
                                                    <input type="checkbox" className="custom-checkbox-input"
                                                           onChange={() => {
                                                               checkBox ? setCheckBox(false) : setCheckBox(true)
                                                           }}
                                                    /></div>

                                                {!checkBox ?
                                                    <div className="checkbox-unchecked"/> :
                                                    <div className="checked-box">
                                                        <img className="checked-box-tick" src={Tick} alt=""/>
                                                    </div>}
                                            </div>
                                        </div>
                                        <label
                                            className="del-dish-check-box-label f-fm-OpenSans f-s-14 heading-clr f-w-nomal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                                            Topping A
                                            <sapn>- $2.00</sapn>
                                        </label>
                                    </div>
                                </div>

                            </div>


                            {/* buttons */}
                            <div className="main-div-of-buttons">
                                <div className="inside-div-of-btns btns-center">
                                    <span className="common-btn-of-popup color-red">Edit</span>
                                    <span className="common-btn-of-popup color-grey">Close</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </
            div >
    )
        ;
}