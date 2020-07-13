import React from 'react'
//import components
import './style.css'
export default (props) => {
    let{

    }=props;
    return (
        <div className="container-fluid addNewDish-section-one">
            <div className="addNewDish-container-head">
                  <div className="addNewDish-container-left heading-clr f-fm-OpenSans f-s-24 f-w-600 f-w-str-normal f-sty-normal letter-spc-normal">
                      Add New Dish
                  </div>
                  <div className="addNewDish-container-center"/>
                  <div className="addNewDish-container-right">
                      <p className="p-client-review f-fm-OpenSans f-s-16 f-w-600  heading-clr f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                          Client's Review
                      </p>
                      <div className="toggle-main-div">
                          <div className="common-toggle-btn">
                              <label className="switch ">
                                  <input type="checkbox" />
                                  <div className="slider round">
                                      <span className="on">YES</span>
                                      <span className="off">NO</span>
                                  </div>
                              </label>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
    );
}