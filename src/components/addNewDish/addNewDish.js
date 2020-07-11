import React from 'react'
//import components
import Togglebtn from '../commonComponent/toggleBtn/toggleBtn'
import './style.css'
export default () => {
    return (
        <div className="container-fluid addNewDish-section-one">
            <div className="addNewDish-container-head">
                  <div className="addNewDish-container-left heading-clr f-fm-OpenSans f-s-24 f-w-600 f-w-str-normal f-sty-normal letter-spc-normal">
                      Add New Dish
                  </div>
                  <div className="addNewDish-container-center"/>
                  <div className="addNewDish-container-right">
                      <p className="f-fm-OpenSans f-s-16 f-w-600 margin-top-10 heading-clr f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                          Client's Review
                      </p>
                      <Togglebtn/>
                  </div>
            </div>
        </div>
    );
}